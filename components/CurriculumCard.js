import React, { useState } from 'react';
import {
  Box,
  Button,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function CurriculumCard({ curriculum }) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const onSubmit = () => {
    const payloadData = {
      "type": "message",
      "attachments": [
        {
          "contentType": "application/json",
          "content": {
            "name": name,  // Added name field
            "organization": organization,  // Added organization field
            "phoneNumber": phone,  // Added phone number field
            "email": email,
            "curriculum": curriculum
          }
        }
      ]
    }
    setLoading(true)
    fetch("https://prod-190.westus.logic.azure.com:443/workflows/898de74b051948a38470b420a77c74a0/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FPpR9CpjFosxCJBZuMyE4POdfmtZCQsZeEdXShA4lNQ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(payloadData)
      }
    ).then(onful => {
      setLoading(false)
      setSuccess(true)
    })

  }

  return (
    <Box
      w='100%'
      h='100%'
      bg='rgba(65, 72, 85, 0.75)'
      borderRadius={8}
      boxShadow='0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.1)'
    >
      <VStack h='100%' p={5} textAlign='left' spacing={3}>
        <Text color='brand.200' textTransform='uppercase' w='100%' fontSize={12} fontWeight={700}>Curriculum</Text>
        <Text w='100%' fontSize='1em' lineHeight='1.5em' minH='3em' color='brand.100'>{curriculum}</Text>
        <Button
          variant="outline"
          colorScheme="blue"
          size="sm"
          alignSelf="flex-start"
          onClick={() => setShowForm(!showForm)} // Toggle form visibility
        >
          Request access via email
        </Button>

        {showForm && <SimpleGrid w='100%' spacing={2} columns={{ base: 1, sm: 2 }}>
        <GridItem colSpan={2}>
              <Input
                w='100%'
                color='#BABABA'
                border='1px solid #BABABA'
                bg='#3D434F'
                borderRadius='4px'
                type='text'
                placeholder='Full Name'
                value={name}
                isDisabled={success}
                onChange={(e) => setName(e.target.value)}
              />
            </GridItem>
            {/* Organization Input */}
            <GridItem colSpan={2}>
              <Input
                w='100%'
                color='#BABABA'
                border='1px solid #BABABA'
                bg='#3D434F'
                borderRadius='4px'
                type='text'
                placeholder='Organization'
                value={organization}
                isDisabled={success}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </GridItem>
            {/* Phone Number Input */}
            <GridItem colSpan={2}>
              <Input
                w='100%'
                color='#BABABA'
                border='1px solid #BABABA'
                bg='#3D434F'
                borderRadius='4px'
                type='tel'
                placeholder='Phone Number'
                value={phone}
                isDisabled={success}
                onChange={(e) => setPhone(e.target.value)}
              />
            </GridItem>
            {/* Email Input */}
          <GridItem colSpan={3}>
            <Input
              w='100%'
              color='#BABABA'
              border='1px solid #BABABA'
              bg='#3D434F'
              borderRadius='4px'
              type='email'
              placeholder='Email Address'
              value={email}
              isDisabled={success}
              onChange={(e) => setEmail(e.target.value)}
            />
          </GridItem>
          {!success ? <Button isLoading={loading} onClick={onSubmit} isDisabled={!email}>Request</Button>
          : <Button variant='outline' colorScheme='green' isDisabled={true} rightIcon={<CheckIcon/>}>Success </Button>}
        </SimpleGrid>}
      </VStack>
    </Box>
  )
}

export default CurriculumCard;
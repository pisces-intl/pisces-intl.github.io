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

function NewsletterSubscribe() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = () => {
    const payloadData = {
      "type": "message",
      "attachments": [
        {
          "contentType": "application/json",
          "content": {
            "email": email,
          }
        }
      ]
    }
    setLoading(true)
    fetch("https://prod-129.westus.logic.azure.com:443/workflows/f119347bb5404c8cb3ed134968d12c1f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WZEm4RjlI8iaJqau7_0zCcHDiMAWrar6J_T3hdNthUo",
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
    <Box w='100%' h='100%' pb='4'>
      <VStack h='100%' textAlign='left' spacing={3}>
        <Text w='100%' fontSize='24px'  color='brand.200'>Subscribe to Newsletter</Text>
        <SimpleGrid w='100%' spacing={2} columns={{ base: 3, sm: 4 }}>
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
          {!success ? <Button isLoading={loading} onClick={onSubmit} isDisabled={!email}>Subscribe</Button>
          : <Button variant='outline' colorScheme='green' isDisabled={true} rightIcon={<CheckIcon/>}>Success</Button>}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default NewsletterSubscribe;

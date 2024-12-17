import { Heading, Text, Box, Flex, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/Layout';
import { data } from '../../_data/org-data'
import Image from 'next/image';
import * as pics from '../../public/assets/org-members/index'


export default function Board() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title='PISCES | Organization' background='other'>
      <Heading size='lg' mb={isMobile ? '0' : '1.3em'}>PISCES Organization</Heading>
      {isMobile ?
        data.map((obj, index) =>
          <VStack key={obj.name} pb='2em' spacing={4}>
            <Heading w='100%' size='md' mb='0'>{obj.name}</Heading>
            <Heading w='100%' fontSize='1.2em' fontWeight='light'>{obj.title}</Heading>
            <Box minW='320px' minH='210px' w='92vw' position='relative'>
              <Image
                className='org-photo'
                placeholder='blur'
                layout='fill'
                objectPosition='50% 30%'
                objectFit="cover"
                src={pics[obj.image]}
                alt={obj.name}
              />
            </Box>
            <Text variant='content'>{obj.description}</Text>
          </VStack>
        )
        : data.map((obj, index) =>
          <Box key={obj.name} pb='4em'>
            <Flex gap={4} minH='210px' >
              <Box minH='210px'>
                <Heading size='md' mt='0'>{obj.name}</Heading>
                <Heading fontSize='1.2em' fontWeight='light'>{obj.title}</Heading>
                <Text variant='content'>{obj.description}</Text>
              </Box>
              <Spacer />
              <Box minW='320px' minH='210px' w='320px' position='relative'>
                <Image
                  className='org-photo'
                  placeholder='blur'
                  layout='fill'
                  objectPosition='50% 30%'
                  objectFit="cover"
                  src={pics[obj.image]}
                  alt={obj.name}
                />
              </Box>
            </Flex>
          </Box>
        )
      }
    </Layout>
  );
}
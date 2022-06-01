import { Heading, Image, SimpleGrid, Text, Box, Grid, GridItem, Flex, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/Layout';
import { data } from '../../_data/board-data';

export default function Board() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title='PISCES | Board' background='other'>
      <Heading size='lg' mb={isMobile ? '0' : '1.3em'}>Board Members</Heading>
      {isMobile ?
        data.map((obj, index) =>
          <VStack key={index} pb='2em' spacing={4}>
            <Heading w='100%' size='md' mb='0'>{obj.name}</Heading>
            {obj.url && <Box
              bg={`url(${obj.url})`}
              minW='320px'
              minH='210px'
              w='100%'
              bgSize='cover'
              bgPos='center 30%'
              alt={obj.name}
              borderRadius='8px'
            />}
            <Text variant='content'>{obj.description}</Text>
          </VStack>
        )
        : data.map((obj, index) =>
          <Box key={index} pb='4em'>
            <Flex gap={4} minH='210px' >
              <Box minH='210px'>
                <Heading size='md' mt='0'>{obj.name}</Heading>
                <Text variant='content'>{obj.description}</Text>
              </Box>
              <Spacer />
              <Box
                bg={obj.url ? `url(${obj.url})` : `url(https://via.placeholder.com/320x210.webp/3d3d3e/FFFFFF?text=${encodeURIComponent(obj.name)})`}
                minW='320px'
                minH='210px'
                bgSize='cover'
                bgPos='center 30%'
                alt={obj.name}
                borderRadius='8px'
              />
            </Flex>
          </Box>
        )
      }
    </Layout>
  );
}
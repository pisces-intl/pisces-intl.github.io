import React from 'react';
import {
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';

function ResourceCard({ resource }) {
  return (
    <a href={resource.url} target="_blank" rel="noreferrer">
      <Box
        _hover={{
          bg: 'rgba(166, 183, 255, 0.4)',
          cursor: 'pointer'
        }}
        w='100%'
        h='100%'
        bg='rgba(65, 72, 85, 0.75)'
        borderRadius={8}
        boxShadow='0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.1)'
      >
        <VStack h='100%' p={5} textAlign='left' spacing={3}>
          <Text color='brand.200' textTransform='uppercase' w='100%' fontSize={12} fontWeight={700}>{resource.type}</Text>
          <Text w='100%' fontSize='1em' lineHeight='1.5em' minH='3em' color='brand.100'>{resource.title}</Text>
        </VStack>
      </Box>
    </a>
  )
}

export default ResourceCard;

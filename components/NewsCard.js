import React from 'react';
import {
  Box,
  Text,
  VStack,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/dist/client/link';

function NewsCard({ post }) {
  return (
    <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
      <Box _hover={{ bg: 'rgba(166, 183, 255, 0.4)', cursor: 'pointer' }} h='20vh' bg='rgba(65, 72, 85, 0.6)' borderRadius={8} backdropFilter='blur(2px)' boxShadow='0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.1)'>
        <VStack h='100%' p={5} textAlign='left' spacing={3}>
          <HStack w='100%'>
            <Text color='#BABABA' fontSize={12} fontWeight={700}>NEWS</Text>
            <Spacer />
            <Text color='#CCCCCC' fontSize={12} fontWeight={400}>
              {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
            </Text>
          </HStack>
          <Text w='100%' fontSize={16} color='#C2FCFF'>{post.title}</Text>
          <Text wordBreak='break-word' overflow='hidden' textOverflow='ellipsis' w='100%' color='#CCCCCC' fontSize={16} fontWeight={400}>{post.excerpt}</Text>
        </VStack>
      </Box>
    </Link>
  );
}

export default NewsCard;

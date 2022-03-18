import { Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import NewsCard from '../components/NewsCard';
import { getAllPosts } from '../lib/api';

export default function News({ allPosts }) {
  const [search, setSearch] = React.useState('');
  const handleChange = (event) => setSearch(event.target.value)

  return (
    <Layout title='PISCES | News' background='alt'>
      <Text fontSize='2em' mt='1.5em'>News</Text>
      <Input
        mt='1em'
        mb='2em'
        color='#BABABA'
        border='1px solid #BABABA'
        bg='#3D434F'
        borderRadius='4px'
        placeholder='Search'
        value={search}
        onChange={handleChange}
      />
      <VStack pb='2em' spacing={5} >
        {
          allPosts.filter(element =>
            search ? (element?.title?.includes(search) || element?.date?.includes(search)) : element
          )
            .map((nextPost, index) => (
              <NewsCard type='alt' key={index} post={nextPost} />
            ))
        }
      </VStack>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout';

export default function Index({ allPosts }) {

  return (
    <Layout title='PISCES'>
      <Box pt={20}>
        <Heading fontSize={32} fontWeight={500}>Public Infrastructure Security Cyber Education System</Heading>
        <Heading fontSize={64} fontFamily='MontserratBold' lineHeight='78px' pt={10} maxW='920px'>Infrastructure protection, workforce development, and research.</Heading>
        <Link href="/about/pisces" passHref>
          <Button rightIcon={<ArrowForwardIcon />} mt={10} p={6} fontSize={20}>Learn More About Our Program</Button>
        </Link>
      </Box>
      <SimpleGrid columns={3} spacing={8} w='100%' maxW='inherit' position='absolute' bottom='5vh'>
        {
          allPosts.slice(0, 3).map((post, index) => (
            <NewsCard key={index} post={post} />
          ))
        }
      </SimpleGrid>
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
import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout';

export default function Index({ allPosts }) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title='PISCES'>
      <Box pt={20} textAlign={isMobile ? 'center' : ''}>
        <Heading fontSize={isMobile ? '1.2em' : '2em'} fontWeight={500}>Public Infrastructure Security Cyber Education System</Heading>
        <Heading fontSize={isMobile ? '2em' : '4em'} fontFamily='MontserratBold' lineHeight={isMobile ? '1.1em' : '1.5em'} pt={10} maxW='920px'>Infrastructure protection, workforce development, and research.</Heading>
        <Link href="/about/pisces" passHref>
          {isMobile ? <Button rightIcon={<ArrowForwardIcon />} mt={10} fontSize='1em'>Learn More</Button> : <Button rightIcon={<ArrowForwardIcon />} mt={10} p={6} fontSize='1.3em'>Learn More About Our Program</Button>}
        </Link>
      </Box>
      {isMobile ?
        <VStack spacing={6} pt={20} pb={5}>
          {
            allPosts.slice(0, 3).map((post, index) => (
              <NewsCard key={index} post={post} />
            ))
          }
        </VStack>
        :
        <SimpleGrid columns={3} spacing={8} maxW='inherit' pr='1em' position='absolute' bottom='3vh'>
          {
            allPosts.slice(0, 3).map((post, index) => (
              <NewsCard key={index} post={post} />
            ))
          }
        </SimpleGrid>
      }
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
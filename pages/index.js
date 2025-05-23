import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  VStack,
  Text
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NewsCard from '../components/NewsCard';
import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Index({ allPosts }) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
  function handleResize() {
    setIsMobile(window.innerWidth < 890 || window.innerHeight < 910);
  }
  handleResize(); // set initial value
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <Layout title='PISCES'>
      <Box minH={isMobile ? '50vh' : ''}>
        <Heading fontSize={isMobile ? '1.3em' : '2em'} pt={isMobile ? '12vh' : '1.2em'} fontWeight={500}>Public Infrastructure Security Cyber Education System</Heading>
        <Text fontSize={isMobile ? '1.75em' : '4em'} fontFamily='MontserratBold' lineHeight='1.2em' pt={isMobile ? '0.3em' : 10} maxW={isMobile ? '' : '920px'}>Infrastructure protection, workforce development, and research.</Text>
        <Link href="/about/pisces" passHref>
          {isMobile ? <Button rightIcon={<ArrowForwardIcon />} mt={10} fontSize='1em'>Learn More</Button> : <Button rightIcon={<ArrowForwardIcon />} mt={10} p={6} fontSize='1.3em'>Learn more about our program</Button>}
        </Link>
      </Box>
      {isMobile ?
        <>
        <VStack spacing={6} pt={20}>
          {
            allPosts.slice(0, 3).map((post, index) => (
              <NewsCard key={index} post={post} />
            ))
          }
        </VStack>
        <Link href="/cotw" passHref>
        <Box as="a"
          height="auto" // auto so it can adapt on mobile
          width="100vw"
          mt={10}
          textAlign="center"
          _hover={{ cursor: 'pointer', opacity: 0.9 }}
          overflow="hidden"
          backgroundColor="black"
          pt={8}
          px={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          background="linear-gradient(to bottom, #111, #000)"
          shadow="lg"
          position="relative"
          left="50%"
          transform="translateX(-50%)">
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={12}>
                  Catch of the Week
                </Text>
            <Image
              unoptimized
              src="/cotw_small.png"
              alt="Catch of the Week"
              height="200"
              width="200"
            />
        </Box>
        </Link>
        </>
        :
        <>
        <SimpleGrid columns={3} spacing={8} maxW='inherit' pr='1em' mt={5}>
          {
            allPosts.slice(0, 3).map((post, index) => (
              <NewsCard key={index} post={post}/>
            ))
          }
        </SimpleGrid>
        <Link href="/cotw" passHref>
          <Box opacity={1} height="700px" width="100vw" mt={20} textAlign={"center"} _hover={{ opacity: 1, cursor: 'pointer' }} overflow="hidden" backgroundColor={'black'} pt={10} px={4} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" background="linear-gradient(to bottom, #111, #000)" shadow="lg" position="relative" left="50%" transform="translateX(-50%)">
            <Text color="white" fontSize="80px" fontWeight="bold" pt={0}>
                Catch of the Week
            </Text>
            <Image
              src="/cotw_small.png"
              alt="Catch of the Week"
              height="500"
              width="500"
            />
          </Box>
        </Link>
        </>
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
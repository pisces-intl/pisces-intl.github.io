import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
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
        <Link href="/cotm" passHref>
          <Box as="a"
            height="auto"
            maxW="100vw"
            mt={10}
            textAlign="center"
            overflow="hidden"
            backgroundColor="black"
            pt={8}
            pb={12}
            mb={6}
            px={{ base: 4, sm: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            background="linear-gradient(to bottom, #222, #111)"
            shadow="lg"
            cursor="pointer"
          >
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={6}>
              Catch of the Month
            </Text>
            <Image
              unoptimized
              src="/cotm_small.png"
              alt="Catch of the Month"
              height="300"
              width="300"
            />
            <Text mt={6} color="gray.300" fontSize="md" maxW="90vw" px={4} mb={10}>
              This is where we will anonymize and report a significant reported event in the preceding month, as an example of the types of findings that the student analysts have identified, and the oversight analysts have verified and reported.
            </Text>
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
        <Link href="/cotm" passHref>
          <Box opacity={1} height="700px" width="100vw" mt={20} textAlign="left" _hover={{ opacity: 1, cursor: 'pointer' }} overflow="hidden" backgroundColor={'black'} pt={10} px={4} background="linear-gradient(to bottom, #222, #111)" shadow="lg" position="relative" left="50%" transform="translateX(-50%)">
            <Text color="white" fontSize="60px" fontWeight="bold" pt={0} textAlign="center" transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.02)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}>
                Catch of the Month<ChevronRightIcon boxSize={20} />
            </Text>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align="center"
              gap={40}
            >
            <Image
              src="/cotm_small.png"
              alt="Catch of the Month"
              height="500"
              width="500"
            />
            <Text flex="1" color="gray.200" fontSize="30px" maxW="600px">
             This is where we will anonymize and report a significant reported event in the preceding month, as an example of the types of findings that the student analysts have identified, and the oversight analysts have verified and reported.
            </Text>
            </Flex>
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
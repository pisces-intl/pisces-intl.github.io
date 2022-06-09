import React from 'react';
import Head from 'next/head'
import Script from 'next/script';
import Image from 'next/image';
import {
  ChakraProvider,
  Box,
  Container,
} from '@chakra-ui/react';
import theme from '../components/Theme'
import Navbar from '../components/Navbar';

import bg from '../public/bg.webp'
import bgAlt from '../public/bg-alt.webp'

export default function Layout({ title, children, background = 'home' }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
      {background === 'home' &&
        <>
          <Box
            position='fixed'
            h='100vh'
            w='100vw'
            overflow='hidden'
            zIndex='-1' >

            <Image
              layout='fill'
              priority={true}
              placeholder='blur'
              objectFit="cover"
              src={bg}
              alt='Background'
            />
          </Box>
          <Box zIndex='-1' w='100vw' h='100vh' position='fixed' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.85))' />
          <Box zIndex='0' w='100%' h='100%' minH='100vh'>

            <Container maxW='1200px' >
              <Navbar />
              {children}
            </Container>
          </Box>
        </>
      }
      {background === 'alt' &&
        <>
          <Box
            position='fixed'
            h='100vh'
            w='100vw'
            overflow='hidden'
            zIndex='-1' >

            <Image
              layout='fill'
              priority={true}
              placeholder='blur'
              objectFit="cover"
              src={bgAlt}
              alt='Background'
            />
          </Box>
          <Box w='100%' minH='100vh' h='100%' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.75), rgba(51, 51, 51, 0.95))'>
            <Container maxW='1200px' >
              <Navbar />
              {children}
            </Container>
          </Box>
        </>
      }
      {background === 'other' &&
        <Box position='relative' minH='100vh' w='100%' h='100%' bg='linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 120px, rgba(50,54,64,1) 120px, rgba(50,54,64,1) 100%)'>
          <Container maxW='1200px' >
            <Navbar />
            {children}
          </Container>
        </Box>
      }
    </ChakraProvider>
  );
}
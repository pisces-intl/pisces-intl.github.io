import React from 'react';
import Head from 'next/head'
import {
  ChakraProvider,
  Box,
  Container,
} from '@chakra-ui/react';
import theme from '../components/Theme'
import Navbar from '../components/Navbar';

export default function Layout({ title, children, background = 'home' }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      {background === 'home' &&
        <Box w='100vw' minH='100vh' h='100%' bgSize='cover !important' bg='url(/bg.webp) no-repeat center center fixed'>
          <Box w='100%' minH='100vh' h='100%' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.85))'>
            <Container maxW='1200px' >
              <Navbar />
              {children}
            </Container>
          </Box>
        </Box>
      }
      {background === 'alt' &&
        <Box w='100vw' minH='100vh' h='100%' bgSize='cover !important' bg='url(/bg-alt.webp) no-repeat center center fixed'>
          <Box w='100%' minH='100vh' h='100%' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.75), rgba(51, 51, 51, 0.95))'>
            <Container maxW='1200px'>
              <Navbar />
              {children}
            </Container>
          </Box>
        </Box>
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
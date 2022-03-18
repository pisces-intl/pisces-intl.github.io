import React from 'react';
import Head from 'next/head'
import {
  ChakraProvider,
  Box,
  Container,
} from '@chakra-ui/react';
import theme from '../components/theme'
import Navbar from '../components/Navbar';

function Layout({ title, children, background = 'home' }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      {background === 'home' &&
        <Box w='100vw' minH='100vh' bgSize='cover !important' bg='url(/bg.jpg) no-repeat center center fixed'>
          <Box w='100%' minH='100vh' h='100%' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.85))'>
            <Container maxW='1200px' >
              <Navbar />
              {children}
            </Container>
          </Box>
        </Box>
      }
      {background === 'alt' &&
        <Box w='100vw' minH='100vh' bgSize='cover !important' bg='url(/bg2.jpg) no-repeat center center fixed'>
          <Box w='100%' minH='100vh' h='100%' bg='linear-gradient(to bottom, rgba(51, 51, 51, 0.75), rgba(51, 51, 51, 0.95))'>
            <Container maxW='1200px'>
              <Navbar />
              {children}
            </Container>
          </Box>
        </Box>
      }
      {background === 'other' &&
        <Box position='relative' minH='100vh' w='100%' h='100%' bg='linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 110px, rgba(50,54,64,1) 110px, rgba(50,54,64,1) 100%)'>
          <Container maxW='1200px' >
            <Navbar />
            {children}
          </Container>
        </Box>
      }
    </ChakraProvider>
  );
}

export default Layout;

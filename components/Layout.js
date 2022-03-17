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
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box w='100vw' h='100vh' bg={background === 'home' ? 'url(/bg.jpg) no-repeat center center fixed' : 'linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 120px, rgba(50,54,64,1) 120px, rgba(50,54,64,1) 100%)'}>
        <Box w='100%' h='100%' bg={background === 'home' ? 'linear-gradient(to bottom, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.85))' : ''}>
          <Container maxW='1200px' >
            <Navbar />
            {children}
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Layout;

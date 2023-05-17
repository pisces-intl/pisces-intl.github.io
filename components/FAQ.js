import React from 'react';
import { Box, Heading, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link';
import Layout from './Layout';
import ReactMarkdown from 'react-markdown'
import ReactPlayer from 'react-player/lazy'


export default function FAQ({ title, data }) {
  const [leftWidth, setLeftWidth] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setLeftWidth((window.innerWidth - 1200) / 2)
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title={`PISCES | ${title}`} background='other'>
      {isMobile ?
        <Box mt='4em'>
          <Menu>
            <MenuButton w='100%' as={Button} variant='outline' aria-label='TOC'>Table of Contents</MenuButton>
            <MenuList className='table-of-contents' bg='#373C47' minW='100vw' maxW='100vw'>
              {data.map((obj, index) =>
                <Link key={index} href={"#" + encodeURIComponent(obj.title)} passHref>
                  <MenuItem minH='48px'>
                    <Text textOverflow='ellipsis' isTruncated color='brand.100'>
                      {obj.title}
                    </Text>
                  </MenuItem>
                </Link>
              )}
            </MenuList>
          </Menu>
          {data.map((obj, index) =>
            <Box key={index} mb='2em'>
              <Heading id={encodeURIComponent(obj.title)} size='md' scrollMarginTop='1em'>{obj.title}</Heading>
              {obj?.video &&
                <Box pb='1em'>
                  <ReactPlayer controls width='100%' url={obj.video} />
                </Box>
              }
              <ReactMarkdown className='markdown'>{obj.text}</ReactMarkdown>
            </Box>
          )}
        </Box>
        :
        <Box
          overflow='hidden'
          maxW='inherit'
        >
          <Box mt='2em' float='left' width='66%' height='100%'>
            {data.map((obj, index) =>
              <Box key={index} mb='4em'>
                <Heading id={encodeURIComponent(obj.title)} mb='0.5em' size='md' scrollMarginTop='2em'>{obj.title}</Heading>
                {obj?.video &&
                  <Box pb='1em'>
                    <ReactPlayer controls width='100%' url={obj.video} />
                  </Box>
                }
                <ReactMarkdown className='markdown'>{obj.text}</ReactMarkdown>
              </Box>
            )}
          </Box>
          <Box
            position='fixed'
            left={`calc(${leftWidth > 0 ? leftWidth : leftWidth + leftWidth * 0.3}px + 1200px - (1200px * 0.32))`}
            w={`calc(${leftWidth > 0 ? '1200px' : '100%'} * 0.3)`}
            mt='2em'
            py='1em'
            px='1.5em'
            bg='#373C47'
            h='80vh'
            overflow='hidden'
            borderRadius='8px'
            boxShadow='0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.1)'
          >
            <Text color='#BABABA' fontSize={12} pb='0.5em' fontWeight={700}>TABLE OF CONTENTS</Text>
            <Box className='table-of-contents' h='100%' overflowY='scroll'>
              {data.map((obj, index) =>
                <Box key={index} my='1em'>
                  <Link href={"#" + encodeURIComponent(obj.title)} passHref>
                    <ChakraLink>{obj.title}</ChakraLink>
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      }
    </Layout>
  );
}
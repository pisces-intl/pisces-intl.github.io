import React from 'react';
import {
  Text,
  Container,
  Flex,
  Spacer,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuGroup,
  MenuDivider,
  Box,
  Fade
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.webp'


export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [colorChange, setColorchange] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
    const changeNavbarColor = () => {
      if (window.scrollY >= 5)
        setColorchange(true);
      else
        setColorchange(false);
    };
    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    }
  }, [])

  if (isMobile) {
    return (
      <Flex zIndex={50} pb='2em' maxW='1200px' paddingInline='1em' paddingTop={8} alignItems='center' position='sticky' top='0' bgColor={colorChange ? 'rgba(51, 51, 51)' : ''}>
        <Link href="/" passHref>
          <HStack _hover={{ cursor: 'pointer' }}>
            <Box w='65px'>
              <Image placeholder='blur' src={logo} alt='PISCES Logo' />
            </Box>
            <Text fontWeight={500} fontSize='40px' lineHeight='49px'>PISCES</Text>
          </HStack>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={IconButton} w='100%' maxW='80px' icon={<HamburgerIcon />} aria-label='Menu' />
          <MenuList>
            <MenuGroup>
              <Link href="/about/pisces" passHref><MenuItem>About PISCES</MenuItem></Link>
              <Link href="/about/org" passHref><MenuItem>Organization Leaders</MenuItem></Link>
              <Link href="/about/resources" passHref><MenuItem>Resources</MenuItem></Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <Link href="/partners/community" passHref><MenuItem>Community Partners FAQ</MenuItem></Link>
              <Link href="/partners/academic" passHref><MenuItem>Academic Partners FAQ</MenuItem></Link>
              <Link href="/partners/current-partners" passHref><MenuItem>Current Partners</MenuItem></Link>
            </MenuGroup>
            <MenuDivider />
            <Link href="/news" passHref><MenuItem>News</MenuItem></Link>
            <Link href="/donate" passHref><MenuItem >Donate</MenuItem></Link>
            <Link href="/contact" passHref><MenuItem>Contact us</MenuItem></Link>
          </MenuList>
        </Menu>
      </Flex >
    );
  } else {
    return (
      <Flex zIndex={50} pb='1.2em' paddingTop={12} position='sticky' top='0' bgColor={colorChange ? 'rgba(51, 51, 51)' : ''}>
        <Container maxW='1200px'>
          <Flex>

            <Link href="/" passHref>
              <HStack _hover={{ cursor: 'pointer' }}>
                <Box w='65px'>
                  <Image src={logo} alt='PISCES Logo' />
                </Box>
                <Text fontWeight={500} fontSize='40px' lineHeight='49px'>PISCES</Text>
              </HStack>
            </Link>
            <Spacer />
            <HStack spacing={2}>
              <Menu>
                <MenuButton as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>Our Program</MenuButton>
                <MenuList>
                  <Link href="/about/pisces" passHref><MenuItem>About PISCES</MenuItem></Link>
                  <Link href="/about/org" passHref><MenuItem>Organization Leaders</MenuItem></Link>
                  <Link href="/about/resources" passHref><MenuItem>Resources</MenuItem></Link>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>Our Partners</MenuButton>
                <MenuList>
                  <Link href="/partners/community" passHref><MenuItem>Community Partners FAQ</MenuItem></Link>
                  <Link href="/partners/academic" passHref><MenuItem>Academic Partners FAQ</MenuItem></Link>
                  <Link href="/partners/current-partners" passHref><MenuItem>Current Partners</MenuItem></Link>
                </MenuList>
              </Menu>
              <Link href="/news" passHref><Button variant='ghost'>News</Button></Link>
              <Link href="/donate" passHref><Button variant='ghost'>Donate</Button></Link>
              <Link href="/contact" passHref><Button>Contact us</Button></Link>
            </HStack>
          </Flex>
        </Container>
      </Flex >
    );
  }
}

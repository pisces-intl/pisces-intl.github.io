import React from 'react';
import {
  Text,
  Flex,
  Spacer,
  HStack,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link';


export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  if (isMobile) {
    return (
      <Flex paddingTop={8} alignItems='center'>
        <Link href="/" passHref>
          <HStack _hover={{ cursor: 'pointer' }}>
            <Image w='65px' src='/logo.png' alt='PISCES Logo' />
            <Text fontWeight={500} fontSize='40px' lineHeight='49px'>PISCES</Text>
          </HStack>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={IconButton} w='100%' maxW='80px' icon={<HamburgerIcon />} aria-label='Menu' />
          <MenuList>
            <MenuGroup>
              <Link href="/about/pisces" passHref><MenuItem>About PISCES</MenuItem></Link>
              <Link href="/about/board" passHref><MenuItem>Board Members</MenuItem></Link>
              <Link href="/about/resources" passHref><MenuItem>Resources</MenuItem></Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <Link href="/partners/community" passHref><MenuItem>Community Partners</MenuItem></Link>
              <Link href="/partners/academic" passHref><MenuItem>Academic Partners</MenuItem></Link>
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
      <Flex paddingTop={12}>
        <Link href="/" passHref>
          <HStack _hover={{ cursor: 'pointer' }}>
            <Image w='65px' src='/logo.png' alt='PISCES Logo' />
            <Text fontWeight={500} fontSize='40px' lineHeight='49px'>PISCES</Text>
          </HStack>
        </Link>
        <Spacer />
        <HStack spacing={2}>
          <Menu>
            <MenuButton as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>Our Program</MenuButton>
            <MenuList>
              <Link href="/about/pisces" passHref><MenuItem>About PISCES</MenuItem></Link>
              <Link href="/about/board" passHref><MenuItem>Board Members</MenuItem></Link>
              <Link href="/about/resources" passHref><MenuItem>Resources</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>Our Partners</MenuButton>
            <MenuList>
              <Link href="/partners/community" passHref><MenuItem>Community Partners</MenuItem></Link>
              <Link href="/partners/academic" passHref><MenuItem>Academic Partners</MenuItem></Link>
            </MenuList>
          </Menu>
          <Link href="/news" passHref><Button variant='ghost'>News</Button></Link>
          <Link href="/donate" passHref><Button variant='ghost'>Donate</Button></Link>
          <Link href="/contact" passHref><Button>Contact us</Button></Link>
        </HStack>
      </Flex >
    );
  }
}

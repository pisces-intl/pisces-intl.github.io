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
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link';


function Navbar() {
  return (
    <Flex paddingTop={12}>
      <Link href="/" passHref>
        <HStack _hover={{cursor: 'pointer'}}>
          <Image w='65px' src='/logo.png' alt='PISCES Logo'/>
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

export default Navbar;

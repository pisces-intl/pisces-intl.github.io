import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  SlideFade
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import * as bgs from '../public/assets/academic-partners/index'

function PartnerCard({ partner }) {
  const { type, name, image, url } = partner
  const [cardOver, setCardOver] = useState(false)
  const [arrowOver, setArrowOver] = useState(false)

  return (
    <Box
      boxSize='xs'
      position='relative'
      onMouseEnter={() => setCardOver(true)}
      onMouseLeave={() => { setCardOver(false); setArrowOver(false) }}
    >
      <Box
        position='absolute'
        h='inherit'
        w='inherit'
        overflow='hidden'
        borderRadius='1em'
      >
        <Image
          priority={true}
          layout='fill'
          placeholder='blur'
          objectFit="cover"
          src={bgs[image]}
          alt='Background'
        />
      </Box>

      <Box h='inherit' w='inherit' position='absolute' className={cardOver ? 'partner darken' : 'partner card'} />

      <Flex position='absolute' h='100%' p='2em' alignItems='end'>
        <Box>
          <Text color='brand.100'>{type}</Text>
          <Heading mt='0.1em' mb='0.5em' size='md'>{name}</Heading>

          <Box maxH='2.5em' overflow='hidden'>

            <SlideFade offsetX='-20px' offsetY='0' in={arrowOver} unmountOnExit>
              <a target='_blank' rel="noreferrer" href={url} >
                <Button variant='ghost' onMouseLeave={() => setArrowOver(false)}>Learn more about {image.toUpperCase()}</Button>
              </a>
            </SlideFade>

            <SlideFade offsetX='-20px' offsetY='0' in={!arrowOver} unmountOnExit>
              <Button variant='ghost' pl='0' onMouseEnter={() => setArrowOver(true)} >
                <ArrowForwardIcon boxSize='1.1em' />
              </Button>
            </SlideFade>

          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default PartnerCard;

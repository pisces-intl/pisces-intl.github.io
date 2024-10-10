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

function PartnerCard(props) {
  const { type, name, image, url, image_url, state } = props.partner
  const { isMobile } = props
  const [cardOver, setCardOver] = useState(false)
  const isCorporate = type === "Corporate Partner" ? true : false

  return (
    <a target='_blank' rel="noreferrer" href={url} >
      <Box
        boxSize={isMobile ? null : '370px'}
        h={isMobile ? '12em' :
        isCorporate ? '15em': null}
        w={
          isMobile ? 'calc(100vw - 2em)' :
            isCorporate ? '70vw' : null
        }
        maxW={isMobile ? null : isCorporate ? '1140px': '100vw'}
        position='relative'
        onMouseEnter={() => setCardOver(true)}
        onMouseLeave={() => setCardOver(false)}
      >
        <Box
          position='absolute'
          h='inherit'
          w='100%'
          overflow='hidden'
          borderRadius={isMobile ? '0.5em' : '1em'}
        >
          <Image
            priority={true}
            layout='fill'
            placeholder='blur'
            objectFit="cover"
            src={image_url.default}
            alt='Background'
          />
        </Box>

        <Box h='inherit' w='100%' position='absolute' className={cardOver ? 'partner darken' : 'partner card'} />

        <Flex position='absolute' h='100%' p={isMobile ? '1em' : '2em'} alignItems='end'>
          <Box>
            <Text color='brand.100'>{type}</Text>
            <Heading mt='0.1em' mb='0.5em' size={isCorporate ? isMobile ? 'sm' : 'md' : 'md'}>{name}</Heading>

            <Box maxH='2.5em' overflow='hidden'>

              <SlideFade offsetX='-40px' offsetY='0' in={cardOver} unmountOnExit >
                <Button variant='ghost'>Learn more about {isCorporate ? name : image.toUpperCase()}</Button>
              </SlideFade>

              <SlideFade offsetX='-20px' offsetY='0' in={!cardOver} unmountOnExit>
                <Button variant='ghost' pl='0'>
                  <ArrowForwardIcon boxSize='1.1em' />
                </Button>
              </SlideFade>

            </Box>
          </Box>
        </Flex>
      </Box>
    </a>
  )
}

export default PartnerCard;

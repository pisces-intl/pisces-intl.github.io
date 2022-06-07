import React from 'react';
import { Center, SlideFade, Heading, Image, Wrap } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { data } from '../../_data/partners-data';

export default function CurrentPartners() {
  return (
    <Layout title='PISCES | Current Partners' background='other'>
      <Heading py='3vw' textAlign='center' size='lg'>Our Partners</Heading>
      <Wrap justify='center' spacing='2vw' mb='2em'>
        {data.map(partner =>
          <Center w='30vw' maxW='225px' key={partner.alt}>
            <SlideFade in={true} offsetY='20px'>
              <a target='_blank' rel="noreferrer" href={partner.url} >
                <Image borderRadius='1em' src={partner.image} alt={partner.alt} />
              </a>
            </SlideFade>
          </Center>
        )}
      </Wrap>
    </Layout>
  );
}
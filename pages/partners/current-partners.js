import React from 'react';
import { Heading, Wrap } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { data } from '../../_data/partners-data';
import PartnerCard from '../../components/PartnerCard';

export default function CurrentPartners() {
  return (
    <Layout title='PISCES | Current Partners' background='other'>
      <Heading py='3vw' textAlign='center' size='lg'>Our Partners</Heading>
      <Wrap justify='center' spacing='1em' mb='2em'>
        {data.map(partner =>
          <PartnerCard key={partner.image} partner={partner} />
        )}
      </Wrap>
    </Layout>
  );
}
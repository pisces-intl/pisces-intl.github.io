import React from 'react';
import { Heading, Wrap } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { data } from '../../_data/partners-data';
import PartnerCard from '../../components/PartnerCard';

export default function CurrentPartners() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title='PISCES | Current Partners' background='other'>
      <Heading textAlign='left' size='lg'>Our Partners</Heading>
      <Wrap spacing='1em' pt='1.5em' mb='2em'>
        {data.map(partner =>
          <PartnerCard isMobile={isMobile} key={partner.image} partner={partner} />
        )}
      </Wrap>
    </Layout>
  );
}
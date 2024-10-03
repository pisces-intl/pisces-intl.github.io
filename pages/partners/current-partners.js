import React from 'react';
import { SlideFade, Heading, Wrap } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import * as academic_data from '../../_data/academic-partners-data';
import * as corporate_data from '../../_data/corporate-partners-data';
import PartnerCard from '../../components/PartnerCard';
import * as academic_bgs from '../../public/assets/academic-partners/index'
import * as corporate_bgs from '../../public/assets/corporate-partners/index'



export default function CurrentPartners() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  return (
    <Layout title='PISCES | Current Partners' background='other'>
      <Heading textAlign='left' size='lg'>Corporate Partners</Heading>
      <Wrap spacing='1.5em' pt='1.5em' mb='4em'>
        {corporate_data.data.map((partner, index) =>
          <SlideFade key={partner.image} in={true} transition={{ enter: { delay: 0.125 * (index + 1) } }}>
            {isMobile && <PartnerCard isMobile={isMobile} key={partner.image} partner={{ ...partner, image_url: corporate_bgs[partner.mobile] }} />}
            {!isMobile && <PartnerCard isMobile={isMobile} key={partner.image} partner={{ ...partner, image_url: corporate_bgs[partner.image] }} />}
          </SlideFade>
        )}
      </Wrap>
      <Heading textAlign='left' size='lg'>Academic Partners</Heading>
      <Wrap spacing='1em' pt='1.5em' mb='2em'>
        {academic_data.data.map((partner, index) =>
          <SlideFade key={partner.image} in={true} transition={{ enter: { delay: 0.125 * (index + 1) } }}>
            <PartnerCard isMobile={isMobile} key={partner.image} partner={{ ...partner, image_url: academic_bgs[partner.image] }} />
          </SlideFade>
        )}
      </Wrap>
    </Layout>
  );
}
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function Donate() {
  return (
    <Layout title='PISCES | Donate' background='other'>
      <Heading size="lg">Donate</Heading>
      <Text variant='content'>
        PISCES is a 501(c)(3) non-profit organization that works with colleges and universities to provide no-cost cybersecurity event monitoring to small public sector organizations while preparing students for the workforce.
        <br /><br />
        This critical work is only possible with help from our partners and community members. If you would like to see this program continue its amazing journey, please consider making a donation today.
      </Text>
      <Heading size='md'>Make a tax-deductible donation to PISCES</Heading>
      <Text variant='content'>For large or recurring donations please email info@pisces-intl.org</Text>
      <Link href="https://www.paypal.com/donate?business=VTZ5DAMVPJ42S&item_name=Donate+to+PISCES&currency_code=USD" passHref>
        <Button size='lg' mt='1em' mb='2em' variant='outline' rightIcon={<ExternalLinkIcon />}>Donate with PayPal</Button>
      </Link>
      <Text variant='content'>You can shop on Amazon Smile with the below URL to share a percentage of the purchase with us.</Text>
      <Link href="https://smile.amazon.com/ch/84-2548117" passHref>
        <Button size='lg' mt='1em' variant='outline' rightIcon={<ExternalLinkIcon />}>Amazon Smile</Button>
      </Link>
    </Layout>
  );
}
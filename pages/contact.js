import { Button, Heading, Input, Link, Text, Textarea, Container } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: ""
  });

  const handleChange = (event) => setState({ ...state, [event.target.name]: event.target.value })

  return (
    <Layout title='PISCES | Contact' background='other'>
      <Container maxW='700px'>

        <Heading size='lg'>Contact Us</Heading>
        <Text variant='content' mb='1em'>Interested in partnering with PISCES? Please complete the form below.</Text>
        <Text variant='content' mb='2em'>Seeking employment? <Link href="https://www.dhs.gov/homeland-security-careers">Try here instead</Link>. {"Unfortunately, PISCES can't respond to employment requests."}</Text>

        <Text mb='0.2em'>Name <Text as='span' variant='content'>(required)</Text></Text>
        <Input
          name='name'
          value={state.name}
          onChange={handleChange}
          type='text'
          border='1px solid #BABABA'
          bgColor='#3D434F'
        />

        <Text pt='2em' mb='0.2em'>Email <Text as='span' variant='content'>(required)</Text></Text>
        <Input
          name='email'
          value={state.email}
          onChange={handleChange}
          border='1px solid #BABABA'
          bgColor='#3D434F'
          type='email'
        />

        <Text pt='2em' mb='0.2em'>Phone <Text as='span' variant='content'>(required)</Text></Text>
        <Input
          name='phone'
          value={state.phone}
          onChange={handleChange}
          type='tel'
          border='1px solid #BABABA'
          bgColor='#3D434F'
        />

        <Text pt='2em' mb='0.2em'>Academic Institution or Municipality</Text>
        <Input
          name='org'
          value={state.org}
          onChange={handleChange}
          type='text'
          border='1px solid #BABABA'
          bgColor='#3D434F'
        />

        <Text pt='2em' mb='0.2em'>Message</Text>
        <Textarea
          name='message'
          value={state.message}
          onChange={handleChange}
          minH='8em'
          border='1px solid #BABABA'
          bgColor='#3D434F'
          mb='2em'
        />

        <Button isDisabled={!(state.name && state.email && state.phone)} size='lg'>Submit</Button>
      </Container>
    </Layout>
  );
}
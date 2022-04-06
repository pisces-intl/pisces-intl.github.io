import { Button, Heading, Input, Link, Text, Textarea, Container, Checkbox, HStack, Modal, ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
    newsletter: true,
  }

  const router = useRouter()
  const [state, setState] = React.useState(initialState);
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (event) => setState({ ...state, [event.target.name]: event.target.value })
  const onClose = (e) => {
    setState(initialState)
    setSubmitted(false);
  }

  return (
    <Layout title='PISCES | Contact' background='other'>
      <Container maxW='700px' p='0'>

        <Heading size='lg'>Contact Us</Heading>
        <Text variant='content' mb='1em'>Interested in partnering with PISCES? Please complete the form below.</Text>
        <Text variant='content' mb='2em'>Seeking employment? <Link target="_blank" rel="noreferrer" href="https://www.dhs.gov/homeland-security-careers">Try here instead</Link>. Unfortunately, PISCES {"can't"} respond to employment requests.</Text>

        <form target="void" onSubmit={() => setSubmitted(true)} action="https://send.pageclip.co/HWQvvYzMyPeWAlq2GEjQh4LLQTCFwty8" className="pageclip-form" method="post">

          <Text mb='0.2em'>Name <Text as='span' variant='content'>(required)</Text></Text>
          <Input
            name='name'
            required
            value={state.name}
            onChange={handleChange}
            type='text'
            border='1px solid #BABABA'
            bgColor='#3D434F'
          />

          <Text pt='2em' mb='0.2em'>Email <Text as='span' variant='content'>(required)</Text></Text>
          <Input
            name='email'
            required
            value={state.email}
            onChange={handleChange}
            border='1px solid #BABABA'
            bgColor='#3D434F'
            type='email'
          />

          <Text pt='2em' mb='0.2em'>Phone <Text as='span' variant='content'>(required)</Text></Text>
          <Input
            name='phone'
            required
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

          <HStack pb='3em'>
            <Checkbox
              name='newsletter'
              isChecked={state.newsletter}
              value={state.newsletter}
              onChange={() => setState({ ...state, newsletter: !state.newsletter })}
              size='lg'
            />
            <Text>Subscribe to Newsletter</Text>
          </HStack>

          <Button mb='2em' size='lg' className="pageclip-form__submit" type="submit">Submit</Button>

        </form>

        <Modal isCentered isOpen={submitted} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalCloseButton />
            <ModalHeader>Thanks!</ModalHeader>
            <ModalBody>Someone from PISCES will reach out soon.</ModalBody>
            <ModalFooter>
              <Button onClick={() => router.push('/')}>Go home</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Container>
    </Layout>
  );
}
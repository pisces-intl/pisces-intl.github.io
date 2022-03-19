import React from 'react';
import { Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
import data from '../../resources.json'

export default function Resources() {
  const [search, setSearch] = React.useState('');
  const handleChange = (event) => setSearch(event.target.value)

  return (
    <Layout title='PISCES | Resources' background='alt'>
      <Heading size='lg'>Resources</Heading>
      <Input
        mb='1em'
        color='#BABABA'
        border='1px solid #BABABA'
        bg='#3D434F'
        borderRadius='4px'
        placeholder='Search'
        value={search}
        onChange={handleChange}
      />
      <Heading size='md'>Links</Heading>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
        {
          data.links.filter(link =>
            search ? (link?.title?.includes(search) || link?.type?.includes(search)) : link
          )
            .map((link, index) => (
              <ResourceCard key={index} resource={link} />
            ))
        }
      </SimpleGrid>
      <Heading size="md">Documents</Heading>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6} pb='2em'>
        {
          data.documents.filter(document =>
            search ? (document?.title?.includes(search) || document?.type?.includes(search)) : document
          )
            .map((document, index) => (
              <ResourceCard key={index} resource={document} />
            ))
        }
      </SimpleGrid>
    </Layout>
  );
}
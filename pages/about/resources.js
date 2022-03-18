import React from 'react';
import { Input, SimpleGrid, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';

export default function Resources() {
  const [search, setSearch] = React.useState('');
  const handleChange = (event) => setSearch(event.target.value)

  const links = [
    {
      url: 'https://www.cisa.gov/', title: 'CISA Pathways Internships', type: 'Resource Link'
    },
    {
      url: 'https://nwrtc.pnnl.gov/', title: 'Northwest Regional Technology Center for Homeland Security', type: 'Resource Link'
    }
  ]

  const documents = [
    {
      url: '/assets/documents/academic-partner-mou-waivers.pdf', title: 'Academic Partner MOU', type: 'PDF'
    },
    {
      url: '/assets/cyber_resilience_and_response.pdf', title: '2018 Cyber resilience & Response', type: 'PDF'
    },
    {
      url: '/assets/documents/flier_pisces_pnnl.pdf', title: 'Official One Pager', type: 'PDF'
    }
  ]

  return (
    <Layout title='PISCES | Resources' background='alt'>
      <Text fontSize='2em' mt='1.5em'>Resources</Text>
      <Input
        mt='1em'
        mb='1em'
        color='#BABABA'
        border='1px solid #BABABA'
        bg='#3D434F'
        borderRadius='4px'
        placeholder='Search'
        value={search}
        onChange={handleChange}
      />
      <Text fontSize='1.5em' my='1em'>Links</Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
        {
          links.filter(link =>
            search ? (link?.title?.includes(search) || link?.type?.includes(search)) : link
          )
            .map((link, index) => (
              <ResourceCard key={index} resource={link} />
            ))
        }
      </SimpleGrid>
      <Text fontSize='1.5em' my='1em'>Documents</Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6} pb='2em'>
        {
          documents.filter(document =>
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
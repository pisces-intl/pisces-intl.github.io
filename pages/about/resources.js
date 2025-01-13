import React from 'react';
import { Box, Heading, Input, SimpleGrid } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ResourceCard from '../../components/ResourceCard';
import { data } from '../../_data/resources-data'
import { toCapitalCase } from '../../lib/api';
import CurriculumCard from '../../components/CurriculumCard';

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
      <Box h='calc(100vh - 335px)' overflowY='auto' pr='1em'>
        <Heading size='md'>Curriculum</Heading>
        <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={6}>
          <CurriculumCard key={"PISCES HS SOC Course"} curriculum={"High School Security Operations Center (SOC) Course"} />
        </SimpleGrid>

        {Object.entries(data).map(([key, value]) =>
          <>
            <Heading size='md'>{toCapitalCase(key)}</Heading>
            <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
              {
                value.filter(item =>
                  search ? (item?.title?.toLowerCase().includes(search.toLowerCase()) || item?.type?.toLowerCase().includes(search.toLowerCase())) : item
                )
                  .map((link, index) => (
                    <ResourceCard key={index} resource={link} />
                  ))
              }
            </SimpleGrid>
          </>
        )}
      </Box>
      <Box pb={10} />
    </Layout>
  );
}
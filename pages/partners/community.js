import React from 'react';
import { data } from '../../_data/community-data'
import FAQ from '../../components/FAQ';

export default function Community() {

  return (
    <FAQ title='Community' data={data} />
  );
}
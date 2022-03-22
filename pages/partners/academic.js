import React from 'react';
import { data } from '../../_data/academic-data'
import FAQ from '../../components/FAQ';

export default function Academic() {

  return (
    <FAQ title='Academic' data={data} />
  );
}
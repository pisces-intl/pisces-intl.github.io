import React from 'react';
import { data } from '../../_data/pisces-data'
import FAQ from '../../components/FAQ';

export default function Pisces() {

  return (
    <FAQ title='About' data={data} />
  );
}
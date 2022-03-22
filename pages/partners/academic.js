import React from 'react';
import { data } from '../../academic-data'
import Faq from '../../components/faq';

export default function Academic() {

  return (
    <Faq title='Academic' data={data} />
  );
}
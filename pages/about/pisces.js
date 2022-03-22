import React from 'react';
import { data } from '../../pisces-data'
import Faq from '../../components/faq';

export default function Pisces() {

  return (
    <Faq title='About' data={data} />
  );
}
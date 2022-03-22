import React from 'react';
import { data } from '../../community-data'
import Faq from '../../components/faq';

export default function Community() {

  return (
    <Faq title='Community' data={data} />
  );
}
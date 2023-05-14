import React from 'react';
import FinderHeader from './sections/FinderHeader';
import { Helmet } from 'react-helmet-async';
import FinderMain from './sections/FinderMain';

export default function index() {
  return (
    <>
      <Helmet>
        <title> Place Booker | Beach Booker </title>
      </Helmet>
      <FinderHeader />
      <FinderMain />
    </>
  );
}

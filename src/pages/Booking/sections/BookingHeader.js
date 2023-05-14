import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingHeader() {
  return (
    <section
      style={{
        borderBottom: '2px solid #CBCCD0',
        marginBottom: '30px',
        fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
      }}
    >
      <Link to="/">
        <img src="/assets/logo-primary.svg" alt="" style={{ width: '15rem', margin: '0 auto', padding: '10px 0' }} />
      </Link>
    </section>
  );
}

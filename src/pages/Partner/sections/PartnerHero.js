import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Btn from './Btn';

const Layout = styled('section')(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column-reverse',
  textAlign: 'center',
  alignItems: 'center',
  fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
  justifyContent: 'space-between',
  backgroundColor: '#06133A',
  padding: '60px 60px 130px 60px',
  borderBottomRightRadius: '50px',
  gap: '40px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    textAlign: 'left',
    borderBottomRightRadius: '200px',
  },
}));

function PartnerHero() {
  return (
    <Layout>
      <Box sx={{ maxWidth: '35rem' }}>
        <Typography
          fontSize="60px"
          fontWeight="600"
          marginBottom="20px"
          fontFamily="TT Norms Pro Regular, Helvetica,sans-serif"
        >
          Devenez partenaire
        </Typography>
        <Typography variant="p" sx={{ fontWeight: '500', fontSize: '22px', display: 'block' }}>
          Propulsez votre établissement sur le devant de la scène et augmentez vos réservations.
        </Typography>
        <Btn btnText="M’inscrire" color="#fff" bgColor="none" borderColor="#fff" hoverBgColor="#1A2549" />
      </Box>
      <Box>
        <img src={`/assets/images/beach.jpg`} alt="" style={{ borderRadius: '5rem', width: '30rem' }} />
      </Box>
    </Layout>
  );
}

export default PartnerHero;

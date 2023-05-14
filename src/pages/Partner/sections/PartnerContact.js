import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Btn from './Btn';

const Layout = styled('section')(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#06133A',
  padding: '50px 80px',
  gap: '10px',
  borderBottomRightRadius: '50px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    textAlign: 'left',
    borderBottomRightRadius: '100px',
  },
}));

const Wheel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  [theme.breakpoints.up('xs')]: {
    left: '-50px',
    bottom: '-35px',
    right: 'auto',
  },

  [theme.breakpoints.up('sm')]: {
    right: '8%',
    bottom: '-15px',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    right: '28%',
  },
}));

export default function PartnerContact() {
  return (
    <Box sx={{ bgcolor: '#1A1919', position: 'relative', overflow: 'hidden' }}>
      <Layout>
        <Box>
          <Typography fontSize="25px" fontWeight="600">
            Besoin d’aide ? Notre équipe est là pour vous !
          </Typography>
        </Box>
        <Wheel>
          <img src={`/assets/icons/wheel.svg`} alt="wheel" />
        </Wheel>
        <Box>
          <Btn btnText="Nous contacter" color="#fff" bgColor="none" borderColor="#fff" hoverBgColor="#1A2549" />
        </Box>
      </Layout>
    </Box>
  );
}

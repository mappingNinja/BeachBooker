import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Btn from './Btn';

const Layout = styled('section')(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '60px 80px',
  borderBottomLeftRadius: '50px',
  fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
  gap: '40px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    textAlign: 'left',
    borderBottomLeftRadius: '200px',
  },
}));

function PartnerRestaurent() {
  return (
    <Box sx={{ bgcolor: '#06133A' }}>
      <Layout>
        <Box>
          <img src={`/assets/images/beach3.jpg`} alt="" style={{ borderRadius: '5rem', width: '30rem' }} />
        </Box>
        <Box sx={{ maxWidth: '40rem', px:"10px" }}>
          <Typography fontSize="40px" fontWeight="600" sx={{ mb: '25px', color: '#06133A' }}>
          Ajoutez votre restaurant
          </Typography>
          <Typography variant="p" sx={{ fontWeight: '500', fontSize: '22px', display: 'block', color: '#06133A' }}>
          Multipliez votre affluence en ajoutant votre service de restauration
          </Typography>
          <Btn btnText="Commencer" color="#06133A" bgColor="none" borderColor="#06133A" hoverBgColor="#E8EDFF" />
        </Box>
      </Layout>
    </Box>
  );
}

export default PartnerRestaurent;

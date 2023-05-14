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
  backgroundColor: '#E8EDFF',
  padding: '60px 80px',
  borderBottomRightRadius: '50px',
  gap: '40px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    textAlign: 'left',
    borderBottomRightRadius: '200px',
  },
}));

function PartnerBeachBooker() {
  return (
    <Box sx={{ bgcolor: '#fff' }}>
      <Layout>
        <Box sx={{ maxWidth: '40rem', px: '10px' }}>
          <Typography fontSize="40px" fontWeight="600" sx={{ mb: '25px', color: '#06133A' }}>
            Ils utilisent Beach booker
          </Typography>
          <Typography variant="p" sx={{ fontWeight: '500', fontSize: '22px', display: 'block', color: '#06133A' }}>
            « Juste parfait! S’occuper de sa plage en tout simplicité.
          </Typography>
          <Typography variant="p" sx={{ fontWeight: '500', fontSize: '22px', display: 'block', color: '#06133A' , mt: "25px"}}>
            Beach booker a changé la gestion de mon établissement. C’est un gain de temps primordial pour piloter notre
            organisation. »
          </Typography>
          <Typography sx={{color: "#06133A", mt: "25px"}}>Julien M • L’ayot Plage, Cap D’adge</Typography>
          <Btn btnText="M’inscrire" color="#06133A" bgColor="none" borderColor="#06133A" hoverBgColor="#E8EDFF" />
        </Box>
        <Box>
          <img src={`/assets/images/beach2.jpg`} alt="" style={{ borderRadius: '5rem', width: '30rem' }} />
        </Box>
      </Layout>
    </Box>
  );
}

export default PartnerBeachBooker;
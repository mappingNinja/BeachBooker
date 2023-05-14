import React from 'react';
import back from '../../../assets/icons/back.svg';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styled from '@emotion/styled';

const Layout = styled(Box)(({theme}) => ({
  width: '100%',
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    width: '60%',
    margin: '0',
  }
}))

export default function Reservation() {
  return (
    <Layout>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          '&:hover': { backgroundColor: '#E8EDFF' },
          p: '2px 5px',
          borderRadius: '10px',
          mb: '15px',
        }}
      >
        <img src={back} alt="" style={{ width: '14px' }} />
        <Typography color="#303B5E" fontSize="15px">
          Retour à la plage
        </Typography>
      </Button>
      <Typography color="#000" fontSize="30px" fontWeight="600">
        Réservation
      </Typography>
      <hr style={{ border: '1px solid #EAEDF8', margin: '20px 0' }} />
      <Typography color="#000" fontSize="20px" fontWeight="500">
        Sélectionnez vos options
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '20px' }}>
        <Typography color="#000" fontSize="15px" fontWeight="600">
          Transats
        </Typography>
        <hr style={{ border: '2px solid #F8F9FF', margin: '20px 0', width: '100%' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#FFF0EE',
          borderRadius: '10px',
          p: '8px 16px',
        }}
      >
        <Box>
          <Typography color="#242141" fontWeight="600" fontSize="16px">
            Transat
          </Typography>
          <Typography color="#FFA17E" fontSize="14px" fontWeight="600">
            20.00 €
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            style={{
              border: '1px solid #676F86',
              padding: '1px 2px',
              color: '#676F86',
              borderRadius: '100%',
              backgroundColor: '#fff',
            }}
          >
            <RemoveIcon />
          </button>
          <Typography sx={{ color: '#242141', fontWeight: '500', fontSize: '17px' }}>1</Typography>
          <button
            style={{
              border: '1px solid #676F86',
              padding: '1px 2px',
              color: '#676F86',
              borderRadius: '100%',
              backgroundColor: '#fff',
            }}
          >
            <AddIcon />
          </button>
        </Box>
      </Box>
      <FormGroup sx={{ color: 'black', mt: '30px' }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Je souhaite réserver au restaurant (sous réserve de disponibilité)"
        />
      </FormGroup>
    </Layout>
  );
}

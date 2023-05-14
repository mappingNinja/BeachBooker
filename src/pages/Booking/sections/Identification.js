import React from 'react';
import IdentificationForm from './IdentificationForm';
import back from '../../../assets/icons/back.svg';
import { Button, Typography } from '@mui/material';

export default function Identification(props) {
    const {nextTab, prevTab} = props;
  return (
    <section>
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
        onClick={prevTab}
      >
        <img src={back} alt="" style={{ width: '14px' }} />
        <Typography color="#303B5E" fontSize="15px">
          Retour à la réservation
        </Typography>
      </Button>
      <Typography color="#000" fontSize="30px" fontWeight="600">
        Identification
      </Typography>
      <hr style={{ border: '1px solid #EAEDF8', margin: '20px 0' }} />
      <Typography color="#000" fontSize="20px" fontWeight="500">
        Entrez vos coordonnées
      </Typography>
      <IdentificationForm />
    </section>
  );
}
import * as React from 'react';
import ProductBeachBookerLayout from './ProductBeachBookerLayout';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';
import { Grid } from '@mui/material';
import BeachCard from 'src/components/home/BeachCard';

const backgroundImage = '/assets/images/home-save-time.jpg';

export default function ProductBeachBooker() {
  return (
    <ProductBeachBookerLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <TypographyWithLine
        text="AVEC BEACH BOOKER GAGNEZ DU TEMPS"
        color="#fff"
        sx={{
            position: 'relative',
            fontSize: '40px',
          '&:before': {
            position: 'absolute',
            width: '100px',
            backgroundColor: '#fff',
            height: '8px',
            top: '-20px',
            content: '""',
          },
        }}
      />
      <Grid container direction={'row'} spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <BeachCard
            imageName={'reservation.png'}
            primaryText={'Réservation 7j / 24h'}
            secondaryText={"Garantie d'avoir votre transat et votre parasol"}
          />
        </Grid>
        <Grid item xs={4}>
          <BeachCard
            imageName={'restauration.png'}
            primaryText={'Restauration'}
            secondaryText={'Pré commande et service rapide, dès votre arrivée'}
          />
        </Grid>
        <Grid item xs={4}>
          <BeachCard
            imageName={'conciergerie.png'}
            primaryText={'Conciergerie premium'}
            secondaryText={'Voituriers, massages, serviettes ... Pour une journée plage idéale'}
          />
        </Grid>
      </Grid>
    </ProductBeachBookerLayout>
  );
}

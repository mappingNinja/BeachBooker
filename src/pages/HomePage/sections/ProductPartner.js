import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';
import { Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import moreIcon from 'src/assets/icons/more.png';

function ProductPartner() {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.contrastText' }}>
      <Container sx={{ mt: 10, mb: 10, display: 'flex', position: 'relative' }} maxWidth="100%">
        <Grid container spacing={2} justifyContent={'space-evenly'}>
          <Grid item>
            <TypographyWithLine text={'DEVENEZ PARTENAIRE'} sx={{ fontSize: '40px' }} />
            <Typography color="secondary.main" fontSize={'1.7rem'} fontWeight="600" sx={{ mt: 2, mb: 0.5 }}>
              PROPULSEZ VOTRE ÉTABLISSEMENT
            </Typography>
            <Typography color="common.black" fontSize="20px">
              sur le devant de la scène et augmentez vos réservations
            </Typography>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '2px solid #fff',
                p: '6px 30px',
                borderRadius: '15px',
                bgcolor: '#1A1919',
                m: '30px auto'
              }}
              onClick={() => navigate("/contact")}
            >
              <Box component="img" src={moreIcon}></Box>
              <Divider
                orientation="vertical"
                color="#fff"
                sx={{ fontSize: '25px', height: '20px', width: '3px', mx: 1.5 }}
              />
              <TypographyWithLine
                text="En savoir plus"
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#fff',
                  '&:before': {
                    width: '0',
                  },
                }}
              />
            </Button>
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: '64px',
              }}
              component="img"
              alt="logo"
              src={`/assets/images/become-partner.png`}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductPartner;

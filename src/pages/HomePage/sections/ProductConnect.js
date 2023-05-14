import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';
import { Button, Divider } from '@mui/material';
import sendIcon from 'src/assets/icons/send.png';
import { useNavigate } from 'react-router-dom';

function ProductConnect() {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#1a1919' }}>
      <Container sx={{ mt: 10, mb: 10, display: 'flex', position: 'relative' }} maxWidth="lg">
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            <TypographyWithLine
              sx={{ fontSize: '1.7rem' }}
              color="#fff"
              text={'BESOIN D’AIDE ? NOTRE ÉQUIPE EST LÀ POUR VOUS !'}
              line={false}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '2px solid #fff',
                p: '0px 20px',
                borderRadius: '15px',
              }}
              onClick={() => navigate('/contact')}
            >
              <Box component="img" src={sendIcon}></Box>
              <Divider
                orientation="vertical"
                color="#fff"
                sx={{ fontSize: '25px', height: '20px', width: '3px', mx: 1.5 }}
              />
              <TypographyWithLine text="Nous contacter" sx={{ fontSize: '20px', fontWeight: '600', color: '#fff', "&:before":{
                width: '0',
              } }} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductConnect;

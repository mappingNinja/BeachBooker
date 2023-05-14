import { Typography, Box, Container, Grid, Divider, Link, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FooterLink = ({ text, handleOnClick }) => {
  return (
    <Stack direction={'row'}>
      <Link component="button" onClick={handleOnClick} color={'#fff'} sx={{mx: 'auto', fontSize: '1.5rem', fontWeight: 500 }}>
        {text}
      </Link>
    </Stack>
  );
};

const FooterHeaderText = ({ text }) => {
  return (
    <Typography
      color="text.primary"
      gutterBottom
      sx={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 'bold' }}
    >
      {text}
    </Typography>
  );
};

export default function Footer() {
  const navigate = useNavigate();

  const downloadFile = () => {
    window.location.href = '/assets/pdf/CGV_Beach_Booker.pdf';
  };

  return (
    <Box
      sx={{
        background: '#1a1919',
        pb: 6,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'space-between',
          display: 'flex',
          background: '#1a1919',
          color: '#fff',
        }}
      >
        <Container
          maxWidth={'false'}
          component="footer"
          sx={{
            mt: 0,
            pt: 3,
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly" sx={{ py: 2, mb: 3 }}>
            <Grid item maxWidth="300px">
              <Box component="img" alt="logo" src="/assets/logo-footer.png" />
              <Typography fontSize="17px" mt="6px" mb="15px">contact@beachbooker.fr</Typography>
              <Typography fontSize="18px">1095 rue Henri Becquerel, 34000 Montpellier</Typography>
            </Grid>
            <Divider color="#fff" orientation="vertical" flexItem></Divider>
            <Grid item>
              <FooterHeaderText text="COMMUNAUTÉ" />

              <FooterLink text={'Nous contacter'} handleOnClick={() => navigate('/contact')} />
              <FooterLink text={'CGV'} handleOnClick={downloadFile} />
            </Grid>
            <Divider color="#fff" orientation="vertical" flexItem></Divider>
            <Grid item>
              <FooterHeaderText text="ESPACE PRO" />
              <FooterLink text={'Devenir partenaire'} handleOnClick={() => navigate('/partner')} />
            </Grid>
            <Divider color="#fff" orientation="vertical" flexItem></Divider>
            <Grid item>
              <FooterHeaderText text="SUIVEZ-NOUS" />
              <Stack direction={'row'} mx='auto' width="fit-content" spacing={2}>
                <Box
                  onClick={() => window.open('https://www.instagram.com/beachbookerfrance/', '_blank')}
                  component="img"
                  alt="instagram"
                  src="/assets/images/instagram.png"
                  sx={{ height: '50px', weight: '50px', cursor: 'pointer' }}
                />
                <Box
                  onClick={() => window.open('https://www.facebook.com/beachbookerfrance', '_blank')}
                  component="img"
                  sx={{ height: '50px', weight: '50px', cursor: 'pointer' }}
                  alt="facebook"
                  src="/assets/images/facebook.png"
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Divider color="#fff" />
            </Grid>
            <Grid container sx={{ mt: 4 }} justifyContent="space-between">
              <Grid item>
                <Typography>© Beach Booker, 2022 - Tous droits réservés</Typography>
              </Grid>
              <Grid item>
                <Typography>Politique de confidentialité -</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <a
        href="/assets/pdf/Mentions_Legales_Beach_Booker.pdf"
        target="_blank"
        style={{
          color: '#F8F4F8',
          fontStyle: 'normal',
          lineHeight: '20px',
          fontWeight: '500',
          fontSize: '21px',
          textAlign: 'right',
          display: 'inherit',
          marginRight: '17rem',
          outline: 'none'
        }}
      >
        Mentions légales
      </a>
    </Box>
  );
}

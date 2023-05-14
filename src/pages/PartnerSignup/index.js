/* eslint-disable array-callback-return */
import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PartnerSignupForm from 'src/components/partner/PartnerSignupForm';

export default function PartnerSignupPage() {
  return (
    <>
      <Helmet>
        <title> Partner Page | Beach Booker </title>
      </Helmet>
      <Container maxWidth="lg" sx={{ px: 2, py: 4 }}>
        <Typography line={false} textAlign="center" sx={{ fontSize: '40px', color: '#000', fontWeight: "600" }}>
          Devenez Partenaire Beach booker
        </Typography>
        <Typography color="#9399ad" sx={{pt: 1, pb: 3, fontSize: '18px', fontWeight:'600' }} textAlign="center">
          Augmentez votre volume de réservations
        </Typography>
        <PartnerSignupForm />
      </Container>
    </>
  );
}

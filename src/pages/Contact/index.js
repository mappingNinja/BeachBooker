/* eslint-disable array-callback-return */
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ContactForm from 'src/components/contact/ContactForm';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';

export default function ContactPage() {

    return (
        <>
            <Helmet>
                <title> Contact Page | Beach Booker </title>
            </Helmet>
            <Container maxWidth="lg" sx={{px:2, py:15}}>
                <TypographyWithLine text="Nous contacter" line={false} textAlign="center" />
                <ContactForm />
            </Container>
        </>
    );
}

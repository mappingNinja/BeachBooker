/* eslint-disable eqeqeq */
import { Field, Form, Formik } from 'formik';
import { Stack, FormControl, Button, Grid, FormLabel } from '@mui/material';
import { TextField } from 'formik-mui';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import PhoneField from '../form/formik/PhoneField';


const ContactFormSchema = Yup.object().shape({
    facilityName: Yup.string().required("Champ requis"),
    address: Yup.string().required("Champ requis"),
    city: Yup.string().required("Champ requis"),
    postalCode: Yup.string().required("Champ requis"),
    country: Yup.string().required("Champ requis"),
    firstName: Yup.string().required("Champ requis"),
    name: Yup.string().required("Champ requis"),
    email: Yup.string().email().required("Champ requis"),
    phone: Yup.string().required("Champ requis"),
});

const defaultValuesData = {
    id: '',
    facilityName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    firstName: '',
    name: '',
    email: '',
    phone: '',
};

const PartnerSignupForm = () => {
    const [defaultValues, setDefaultValues] = useState(defaultValuesData);

    const handleSubmit = useCallback((values) => {
        console.log(values, 'values');
    }, []);

    return (
        <Grid container direction={"row"} sx={{ mt: 2, mb: 6 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Formik
                    enableReinitialize
                    validationSchema={ContactFormSchema}
                    onSubmit={handleSubmit}
                    initialValues={defaultValues}
                    validateOnBlur={true}
                    validateOnChange={true}
                >
                    {({ isValid }) => (
                        <Form autoComplete="off" noValidate>
                            <Stack spacing={3} sx={{ mt: 2, width: "600px", maxWidth: "600px" }}>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="facilityName"
                                            fullWidth
                                            placeholder="Nom de l’établissement"
                                            label="Nom de l’établissement"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="address"
                                            fullWidth
                                            placeholder="Adresse de l’établissement"
                                            label="Adresse de l’établissement"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="city"
                                            fullWidth
                                            placeholder="Ville"
                                            label="Ville"
                                            required
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="postalCode"
                                            fullWidth
                                            placeholder="Code postal"
                                            label="Code postal"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="country"
                                            fullWidth
                                            placeholder="Pays"
                                            label="Pays"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="firstName"
                                            fullWidth
                                            placeholder="Prénom"
                                            label="Prénom"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="name"
                                            fullWidth
                                            placeholder="Nom"
                                            label="Nom"
                                            required
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={TextField}
                                            name="email"
                                            fullWidth
                                            placeholder="Adresse e-mail"
                                            label="Adresse e-mail"
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row">
                                    <FormControl fullWidth>
                                        <Field
                                            component={PhoneField}
                                            name="phone"
                                            fullWidth
                                            placeholder="Numéro de téléphone"
                                            label="Numéro de téléphone"
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row" spacing={2} justifyContent={"center"}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        S’inscrire
                                    </Button>
                                </Stack>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>

    );
}

export default PartnerSignupForm;

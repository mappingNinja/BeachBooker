/* eslint-disable eqeqeq */
import { Field, Form, Formik } from 'formik';
import { Stack, FormControl, Button, Grid, FormLabel } from '@mui/material';
import { TextField } from 'formik-mui';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import PhoneField from '../form/formik/PhoneField';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const ContactFormSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  phone: Yup.string().required(),
  message: Yup.string().required(),
});

const defaultValuesData = {
  id: '',
  email: '',
  name: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [defaultValues, setDefaultValues] = useState(defaultValuesData);

  const handleSubmit = useCallback((values) => {
    const { email, name, phone, message } = values;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('message', message);

    const url = `${REACT_APP_BASE_URL}api/contact/message`;
    const body = {
      subject: 'Beach Booker. B2C. Formulaire Nous contacter',
      formData,
    };
    axios
      .post(url, body)
      .then((res) => alert('The Mail send Successful!'))
      .catch((err) => alert(err.message || err.error || err));
  }, []);

  return (
    <Grid container direction={'row'} sx={{ mt: 2, mb: 6 }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Formik
          enableReinitialize
          validationSchema={ContactFormSchema}
          onSubmit={handleSubmit}
          initialValues={defaultValues}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ errors }) => (
            <Form autoComplete="off" noValidate>
              <Stack spacing={3} sx={{ mt: 2, width: '600px', maxWidth: '600px' }}>
                {JSON.stringify(errors)}
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field
                      component={TextField}
                      name="email"
                      fullWidth
                      placeholder="Adresse e-mail"
                      label="Adresse e-mail"
                      required
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field component={TextField} name="name" fullWidth placeholder="Nom" label="Nom" required />
                  </FormControl>
                </Stack>
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field
                      component={PhoneField}
                      name="phone"
                      fullWidth
                      placeholder="Numéro de téléphone (Facultatif)"
                      label="Numéro de téléphone (Facultatif)"
                      required
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field
                      component={TextField}
                      name="message"
                      fullWidth
                      placeholder="Message"
                      label="Message"
                      multiline={true}
                      rows={2}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent={'center'}>
                  <Button size="large" variant="contained" type="submit">
                    Envoyer
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactForm;

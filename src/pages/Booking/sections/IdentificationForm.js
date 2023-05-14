/* eslint-disable eqeqeq */
import { Field, Form, Formik } from 'formik';
import { Stack, FormControl, Button, Grid } from '@mui/material';
import { TextField } from 'formik-mui';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import PhoneField from '../../../components/form/formik/PhoneField';

const ContactFormSchema = Yup.object().shape({
  firstname: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneCode: Yup.string().required(),
  phone: Yup.string().required(),
  message: Yup.string().required(),
});

const defaultValuesData = {
  id: '',
  firstname: '',
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function IdentificationForm() {
  const [defaultValues, setDefaultValues] = useState(defaultValuesData);

  const handleSubmit = useCallback((values) => {
    console.log(values, 'values');
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
          {({ isValid }) => (
            <Form autoComplete="off" noValidate>
              <Stack spacing={3} sx={{ mt: 2, width: '600px', maxWidth: '600px' }}>
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field
                      component={TextField}
                      name="firstname"
                      fullWidth
                      placeholder="Prénom"
                      label="Prénom"
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
                      component={TextField}
                      name="email"
                      fullWidth
                      placeholder="Email"
                      label="Email"
                      required
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row">
                  <FormControl fullWidth>
                    <Field
                      component={PhoneField}
                      name="phone"
                      fullWidth
                      placeholder="Téléphone"
                      label="Téléphone"
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
                      placeholder="Laisser un commentaire (heure d'arrivée, remarques, etc...)"
                      label="Laisser un commentaire (heure d'arrivée, remarques, etc...)"
                      multiline={true}
                      rows={2}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button size="large" variant="contained" disabled type="submit" sx={{borderRadius: '15px'}}>
                    Continuer
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
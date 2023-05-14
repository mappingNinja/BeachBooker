import { useState } from 'react';
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { Stack, IconButton, InputAdornment, TextField, FormLabel, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import Iconify from '../../../components/iconify';
import { LoginSchema } from '../../../validations/loginSchema';
import { authLogin } from '../../../services/user.service';
import { useAuth } from '../../../context/AuthContext';


const LoginForm = () => {
    const navigate = useNavigate();
    const { setSession, setUser } = useAuth()

    const formik = useFormik({
        initialValues: {
            login: 'k123@gmail.com',
            password: '123456',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await authLogin(values).then(async (res) => {
                setSubmitting(false);
                if (res && res.status && res.data) {
                    const { token } = res.data;
                    setUser(res.data);
                    setSession(token, res.data?.id, res.data)
                    toast.success(res.message);
                    // navigate("/welcome")
                } else {
                    toast.error(res.message);
                }
            }).catch((err) => {
                setSubmitting(false)
                if (err) {
                    toast.error("Something went wrong, Please try again later");
                }
                console.log(err);
            })
        }
    });

    const [showPassword, setShowPassword] = useState(false);

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    {errors.api && errors.api}
                    <Stack spacing={3}>
                        <FormControl>
                            <FormLabel>Login (email)</FormLabel>
                            <TextField
                                name="login"
                                {...getFieldProps('login')}
                                error={Boolean(touched.login && errors.login)}
                                helperText={(touched.login && errors.login)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <TextField
                                name="password"
                                placeholder="Mot de passe"
                                type={showPassword ? 'text' : 'password'}
                                {...getFieldProps('password')}
                                error={Boolean(touched.password && errors.password)}
                                helperText={(touched.password && errors.password)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </Stack>
                    <Stack spacing={3} sx={{ mt: 2 }}>
                        <LoadingButton loading={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                            Se connecter
                        </LoadingButton>
                    </Stack>
                </Form>
            </FormikProvider>

        </>
    );
}

export default LoginForm;


import { toast } from 'react-toastify';
import { useState, useCallback } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, InputAdornment, IconButton, FormLabel, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ChangePasswordSchema } from '../../validations/ChangePasswordSchema';
import Iconify from '../iconify/Iconify';
import { changePassword } from '../../services/user.service';
import { useAuth } from '../../context/AuthContext';


export default function ChangePasswordForm() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const { user } = useAuth();


    const formik = useFormik({
        initialValues: {
            login_user_id: user.id,
            old_password: '',
            new_password: '',
            confirmNewPassword: ''
        },
        validationSchema: ChangePasswordSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            const res = await changePassword(values);
            setSubmitting(false);
            if(res.status){
                toast.success(res.message);
                resetForm()
            }else{
                toast.error(res.message)
            }
            console.log(res, "res");
        }
    });

    const handleShowOldPassword = useCallback(() => {
        setShowOldPassword((show) => !show);
    }, []);

    const handleShowPassword = useCallback(() => {
        setShowPassword((show) => !show);
    }, []);

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (

        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={2} alignItems="flex-start">
                    <FormControl fullWidth>
                        <FormLabel>Ancien mot de passe :</FormLabel>
                        <TextField
                            {...getFieldProps('old_password')}
                            size="small"
                            autoComplete="off"
                            type={showOldPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowOldPassword} edge="end">
                                            <Iconify icon={showOldPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            error={
                                Boolean(touched.old_password && errors.old_password) || Boolean(errorMessage)
                            }
                            helperText={(touched.old_password && errors.old_password) || errorMessage}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel>Nouveau mot de passe :</FormLabel>
                        <TextField
                            {...getFieldProps('new_password')}
                            size="small"
                            autoComplete="off"
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            error={Boolean(touched.new_password && errors.new_password)}
                            helperText={
                                (touched.new_password && errors.new_password)
                            }
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel>Confirmer le nouveau mot de passe :</FormLabel>
                        <TextField
                            {...getFieldProps('confirmNewPassword')}
                            size="small"
                            autoComplete="off"
                            type="password"
                            error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
                            helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                        />
                    </FormControl>


                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        loadingIndicator="Loading..."
                    >
                        Save Changes
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
}

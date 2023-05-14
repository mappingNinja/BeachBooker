import * as Yup from 'yup';

export const ChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string().required('Old Password is required'),
  new_password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password is required'),
  confirmNewPassword: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match')
});
import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    login: Yup.string().email('Must be a valid Email').required('Merci de saisir un login'),
    password: Yup.string().required('Merci de saisir un mot de passe')
});
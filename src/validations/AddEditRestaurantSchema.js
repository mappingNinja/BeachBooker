import { object, number } from 'yup';


export const AddEditRestaurantSchema = object().shape({
    spotsCount: number()
        .typeError("Merci de saisir un nombre de place (un chiffre)")
        .positive("Merci de saisir un nombre de place (un chiffre)")
        .integer("Merci de saisir un nombre de place (un chiffre)")
        .label('Nombre de place')
        .nullable()
        .required(),
    sittingCount: number()
        .max(1, "Merci de saisir un nombre de service entre 1 et 9")
        .label('Nombre de service')
        .nullable(true)
        .required(),
});
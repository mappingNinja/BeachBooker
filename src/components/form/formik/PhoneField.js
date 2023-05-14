import { ErrorMessage, FieldProps } from 'formik';
import { FC, ReactNode, useCallback } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const useStyles = makeStyles((theme) => ({
    helperText: {
        marginRight: 0,
        textAlign: "end",
        color: "#787885 !important"
    }
}));



const PhoneField = ({
    form: { setFieldValue, errors, touched, handleChange },
    field: { name, value },
    label,
    placeholder,
    limit = 110,
    ...props
}) => {
    const classes = useStyles();

    const onChange = useCallback(
        (e) => {

            setFieldValue(name, e);
        },
        [setFieldValue, name]
    );

    return (
        <Box sx={{ width: '100%' }}>
            <PhoneInput
                width={"100%"}
                country={'fr'}
                fullWidth={true}
                label={label}
                specialLabel={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                enableSearch={true}
            />
            <ErrorMessage
                name={name}
                component="div"
                className="invalid-feedback"
            />
        </Box>
    );
}

export default PhoneField;
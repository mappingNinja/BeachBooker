import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';


export default function TypographyWithLine({ text = '', color = "#000", line = true, sx, ...other }) {
    return (

        <Typography
            component="p"
            sx={{
                ...line && {
                    ":before": {
                        position: "absolute",
                        width: "90px",
                        backgroundColor: color,
                        height: "8px",
                        top: "-18px",
                        content: '""'
                    }
                },
                textTransform: "uppercase",
                fontWeight: 700,
                color: color,
                fontSize: "3rem",
                lineHeight: "3rem",
                ...sx && { ...sx }
            }}
            {...other}
        >
            {text}
        </Typography >
    );
}

TypographyWithLine.propTypes = {
    text: PropTypes.string,
};


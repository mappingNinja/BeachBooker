import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';


AppWidgetSummary.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, color = 'primary', sx, ...other }) {
    return (
        <Card
            sx={{
                py: 2,
                boxShadow: 0,
                textAlign: 'center',
                color: (theme) => theme.palette[color].darker,
                bgcolor: (theme) => theme.palette[color].lighter,
                ...sx,
            }}
            {...other}
        >
            <Typography variant="h3">{total}</Typography>

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {title}
            </Typography>
        </Card>
    );
}

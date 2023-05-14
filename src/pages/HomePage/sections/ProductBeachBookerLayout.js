import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductBeachBookerLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '70vh',
        minHeight: 500,
        maxHeight: 1000,
    },
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function ProductBeachBookerLayout(props) {
    const { sxBackground, children } = props;

    return (
        <ProductBeachBookerLayoutRoot>
            <Container
                sx={{
                    mt: '100px',
                    mb: 14,                    
                }}
            >
                {children}
                <Background sx={sxBackground} />
            </Container>
        </ProductBeachBookerLayoutRoot>
    );
}

ProductBeachBookerLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default ProductBeachBookerLayout;
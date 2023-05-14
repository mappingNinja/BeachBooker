import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';
import PartnerBeachSlider from 'src/components/home/PartnerBeachSlider';


function ProductPartnerBeach() {
    return (
        <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.contrastText' }}>
            <Container sx={{ mt: 10, mb: 10, display: 'flex', position: "relative" }} maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <TypographyWithLine
                            text={"Nos plages partenaires"}
                            sx={{fontSize: '40px'}}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 5 }}>
                        <PartnerBeachSlider />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );

}

export default ProductPartnerBeach;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function BeachCard({ imageName, primaryText, secondaryText }) {
    return (
        <Card sx={{ borderRadius: "50px", position: "relative" }}>
            <CardContent>
                <Grid container direction={"row"} justifyItems={"center"} spacing={4} alignItems={"center"}>
                    <Grid item xs={12} sx={{ justifyContent: "center", display: "flex", mb: 2 }}>
                        <Box sx={{ width: "75px", height: "75px" }} component="img" alt="logo" src={`/assets/images/${imageName}`} />
                    </Grid>
                    <Grid item xs={12} position={"relative"}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "1.40rem",
                                ":before": {
                                    position: "absolute",
                                    content: '""',
                                    top: "-1px",
                                    width: "75px",
                                    height: "8px",
                                    backgroundColor: "#ed7b74",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    left: 25,
                                    right: 0,
                                }
                            }}
                            textAlign={"center"}
                            color="#ed7b74"
                            gutterBottom
                        >
                            {primaryText}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: "-30px" }}>
                        <Typography sx={{ fontSize: "1.2rem" }} color="#000" textAlign={"center"} gutterBottom>
                            {secondaryText}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}

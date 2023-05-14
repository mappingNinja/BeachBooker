import { Box, Button } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


export default function BeachContentHeader({ children, sx, reservationSelected, handleHeaderClick }) {
    return (
        <>
            <Box className="sea-container">
                {reservationSelected && (
                    <Box position={"absolute"} sx={{ top: "40px", left: "30%" }}>
                        <Button color={reservationSelected.status === "in" ? "warning" : "inherit"} onClick={() => handleHeaderClick("in")} startIcon={<KeyboardDoubleArrowRightIcon />} variant="contained" size='small'>IN</Button>
                        <Button color={reservationSelected.status === "out" ? "warning" : "inherit"} onClick={() => handleHeaderClick("out")} startIcon={<KeyboardDoubleArrowRightIcon />} variant="contained" size='small' sx={{ ml: 2 }}>OUT</Button>
                        <Button color={reservationSelected.status === "noshow" ? "warning" : "inherit"} onClick={() => handleHeaderClick("noshow")} startIcon={<VisibilityOffIcon />} sx={{ ml: 2 }} variant="contained" size='small'>NO SHOW</Button>
                    </Box>
                )}
                <Box
                    component="div"
                    sx={{
                        height: "100px", backgroundImage: `url(/assets/beach/beachbooker_beach_sea.svg)`,
                        backgroundRepeat: "no-repeat",
                        width: "100%"
                    }}
                />
            </Box>
            <Box direction={"row"} width={"100%"} sx={{ ml: 5, mt: 30, ...sx }}>
                {children}
            </Box>
        </>

    );
}



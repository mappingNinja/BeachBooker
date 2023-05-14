import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import umbrella from '../../../assets/icons/umbrellaIcon.svg';
import down from '../../../assets/icons/down.svg';

export default function Beaches() {
  return (
    <Box sx={{ width: '50vw', height: 'calc(100vh - 76px)', p: '25px 0 0 30px', overflow: 'hidden' }}>
      <Box sx={{ mb: '20px' }}>
        <Typography color="#B9B0C1" fontSize="13px">
          30 résultats
        </Typography>
        <Typography color="black" fontSize="25px" fontWeight="600">
          Antibes-Juan Les Pins : plages
        </Typography>
      </Box>
      <Box
        sx={{
          height: 'calc(100% - 77px)',
          overflowY: 'auto',
          overflowX: 'hidden '
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {(() => {
            let jsx = [];
            for (let i = 0; i < 10; i++) {
              jsx.push(
                <Box
                  sx={{
                    width: 'calc(50% - 10px)',
                    cursor: 'pointer',
                    p: '10px 10px 25px 10px',
                    borderRadius: '20px',
                    '&:hover': {
                      bgcolor: '#FFF0EF',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/images/beach4.jpg"
                    sx={{ width: '100%', height: '10rem', borderRadius: '20px', mb: '10px' }}
                  ></Box>
                  <Typography color="black" fontSize="20px" fontWeight="600">
                    O'Key beach
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography color="#C2C1D1" fontSize="15px">
                      Cannes, France
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '10px' }}>
                      <img src={umbrella} alt="" style={{ backgroundColor: 'transparent', width: '20px' }} />
                      <Typography color="#000" fontSize="12px">
                        214
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            }
            return jsx;
          })()}
        </Box>
        <Button sx={{display: 'flex', m: '3rem auto 10rem auto',  color:"#ff8478", flexDirection: 'column', borderRadius:'15px', alignItems: 'center', p: '2px 25px', "&:hover": {
          bgcolor: '#FFF0EF',
        }}}>
          <Typography fontSize="16px" fontWeight="600" textAlign="center">
            Afficher plus
          </Typography>
          <img src={down} alt="" style={{width: '20px',}} />
        </Button>
      </Box>
    </Box>
  );
}

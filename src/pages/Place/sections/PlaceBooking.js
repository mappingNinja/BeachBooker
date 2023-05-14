import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const BoxLayout = styled(Box)(({theme}) => ({
  width: '100%',
  marginTop: '30px',
  [theme.breakpoints.up('lg')]: {
    width: '25rem',
  }
}))

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export default function ProductBooking() {
  return (
    <BoxLayout>
      <form
        style={{
          color: 'black',
          border: '2px solid #EAEDF8',
          padding: '15px 20px',
          borderRadius: '20px',
          width: '100%',
          height: 'fit-content',
        }}
      >
        <Box sx={{ border: '2px solid #EAEDF8', borderRadius: '20px', p: '2px 15px' }}>
          <Typography fontSize="14px" fontWeight="bold">
            Quand
          </Typography>
          <input
            type="text"
            placeholder="7 mai"
            readOnly="readonly"
            style={{ outline: 'none', border: 'none', fontSize: '15px' }}
          ></input>
        </Box>
        <FlexBox mt="25px" px="10px">
          <Typography sx={{ color: 'black', fontSize: '18px', fontWeight: '600' }}>Transat</Typography>
          <FlexBox>
            <button
              style={{
                border: '1px solid #E3E3E3',
                padding: '2px 4px',
                color: '#E3E3E3',
                borderRadius: '100%',
                backgroundColor: 'transparent',
              }}
            >
              <RemoveIcon />
            </button>
            <Typography sx={{ color: 'black', fontWeight: '600', fontSize: '17px' }}>0</Typography>
            <button
              style={{
                border: '1px solid #000',
                padding: '2px 4px',
                color: '#000',
                borderRadius: '100%',
                backgroundColor: 'transparent',
              }}
            >
              <AddIcon />
            </button>
          </FlexBox>
        </FlexBox>
        <FlexBox my="25px" px="10px">
          <Typography sx={{ color: 'black', fontSize: '18px', fontWeight: '600' }}>Bed</Typography>
          <FlexBox>
            <button
              style={{
                border: '1px solid #E3E3E3',
                padding: '2px 4px',
                color: '#E3E3E3',
                borderRadius: '100%',
                backgroundColor: 'transparent',
              }}
            >
              <RemoveIcon />
            </button>
            <Typography sx={{ color: 'black', fontWeight: '600', fontSize: '17px' }}>0</Typography>
            <button
              style={{
                border: '1px solid #E3E3E3',
                padding: '2px 4px',
                color: '#E3E3E3',
                borderRadius: '100%',
                backgroundColor: 'transparent',
              }}
            >
              <AddIcon />
            </button>
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <Typography color="black" fontSize="16px" fontWeight="600">
            Total
          </Typography>
          <Typography color="black" fontSize="22px" fontWeight="600" mb="10px">
            0.00 €
          </Typography>
        </FlexBox>
        <Button
          type="submit"
          sx={{
            textAlign: 'center',
            bgcolor: '#FF8478',
            width: '100%',
            color: '#fff',
            '&:hover': { backgroundColor: '#E55446' },
            fontSize: '15px',
            borderRadius: '15px',
            py: '10px',
          }}
        >
          Réserver
        </Button>
      </form>
    </BoxLayout>
  );
}

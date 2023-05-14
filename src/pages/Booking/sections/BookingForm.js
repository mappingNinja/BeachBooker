import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';

const BoxLayout = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '30px',
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },

}));

const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export default function BookingForm(props) {
  const {nextTab, tabIndex} = props;

  const buttonVisibility = (tabIndex) => {
    if (tabIndex === 0) {
      return {display: 'block'}
    }
    else{
      return {display: 'none'}
    }
  }

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
            placeholder="9 mai"
            readOnly="readonly"
            style={{ outline: 'none', border: 'none', fontSize: '15px' }}
          ></input>
        </Box>
        <Typography sx={{ color: 'black', fontSize: '15px', fontWeight: '600', m: '20px 0 6px 0' }}>
          Transats
        </Typography>
        <FlexBox>
          <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: '500' }}>Transat</Typography>
          <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>20.00 €</Typography>
        </FlexBox>
        <FlexBox my="15px">
          <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: '500' }}>Frais de service</Typography>
          <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>1.50 €</Typography>
        </FlexBox>
        <FlexBox>
          <Typography color="black" fontSize="16px" fontWeight="500">
            Total
          </Typography>
          <Typography color="black" fontSize="22px" fontWeight="600" mb="10px">
            21.50 €
          </Typography>
        </FlexBox>
        <Button
          type="submit"
          style={buttonVisibility(tabIndex)}
          sx={{
            textAlign: 'center',
            bgcolor: '#FF8478',
            width: '100%',
            color: '#fff',
            '&:hover': { backgroundColor: '#E55446' },
            fontSize: '15px',
            borderRadius: '15px',
            py: '10px',
            fontWeight: '500',
          }}
          onClick={nextTab}
        >
          Continuer
        </Button>
      </form>
    </BoxLayout>
  );
}
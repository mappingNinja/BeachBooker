import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Reservation from './Reservation';
import Identification from './Identification';
import Payment from './Payment';
import BookingForm from './BookingForm';

const Circle = styled(Box)({
  width: '15px',
  height: '15px',
  borderRadius: '100%',
  marginBottom: '5px',
});

const Label = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '600',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const Layout = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
});

const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '6rem',
});

const Line = styled(Box)(({theme}) =>({
  border: '1px solid #EAEDF8',
  margin: '0 -32px 5px -32px ',
  width: '15rem',
  [theme.breakpoints.up('md')]: {
    margin: '0 -32px 22px -32px'
  },
}));

const FormLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  justifyContent: 'center',
  padding: '45px 20px 70px 20px',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderBottomRightRadius: '50px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    borderBottomRightRadius: '100px',
  },
}));

export default function Tab() {
  const [tabIndex, setTabIndex] = useState(0);

  const prevTab = (e) => {
    e.preventDefault();
    if (tabIndex > 0) {
      setTabIndex(tabIndex - 1);
    }
  };

  const nextTab = (e) => {
    e.preventDefault();
    if (tabIndex < 2) {
      setTabIndex(tabIndex + 1);
    }
  };

  const circleStyle = (index) => {
    if (tabIndex === index) {
      return { backgroundColor: '#FF8478' };
    } else if (tabIndex > index) {
      return { backgroundColor: '#000' };
    } else {
      return { backgroundColor: '#BCC1D1' };
    }
  };

  const labelStyle = (index) => {
    if (tabIndex >= index) {
      return { color: '#000' };
    } else {
      return { color: '#BCC1D1' };
    }
  };

  return (
    <>
      <Layout>
        <FlexBox>
          <Circle style={circleStyle(0)}></Circle>
          <Label style={labelStyle(0)}>Réservation</Label>
        </FlexBox>
        <Line></Line>
        <FlexBox>
          <Circle style={circleStyle(1)}></Circle>
          <Label style={labelStyle(1)}>Identification</Label>
        </FlexBox>
        <Line></Line>
        <FlexBox>
          <Circle style={circleStyle(2)}></Circle>
          <Label style={labelStyle(2)}>Paiement</Label>
        </FlexBox>
      </Layout>
      <Box sx={{ bgcolor: '#1A1919' }}>
        <FormLayout>
          {tabIndex === 0 ? <Reservation /> : ''}
          {tabIndex === 1 ? <Identification nextTab={nextTab} prevTab={prevTab} /> : ''}
          {tabIndex === 2 ? <Payment nextTab={nextTab} prevTab={prevTab} /> : ''}
          <BookingForm nextTab={nextTab} tabIndex={tabIndex} />
        </FormLayout>
      </Box>
    </>
  );
}

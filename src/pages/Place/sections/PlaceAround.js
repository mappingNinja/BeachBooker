import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Layout = styled(Box)(({ theme }) => ({
  backgroundColor: '#FBECEB',
  padding: '40px 0 40px 40px',
  borderBottomLeftRadius: '50px',
  [theme.breakpoints.up('lg')]: {
    borderBottomLeftRadius: '200px',
    padding: '80px 0 80px 80px',
  },
}));

let Carousel = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  gap: '40px',
  padding: '0 40px 20px 0',
  [theme.breakpoints.up('lg')]: {
    padding: '0 80px 40px 0',
  },
}));

export default function PlaceAround({ dataObj }) {
  return (
    <section style={{ backgroundColor: '#1A1919' }}>
      <Layout>
        <Typography fontSize="40px" fontWeight="600" color="black" mb="30px">
          Aux alentours
        </Typography>
        <Carousel>
          {(dataObj || []).map((data, index) => (
            <a href={data.id} style={{ textDecoration: 'none', flex: '0 0 auto' }}>
              <img
                src={(data?.imageFiles || [])[0]?.url}
                alt=""
                style={{ width: '15rem', height: '10rem', borderRadius: '30px' }}
              />
              <Typography color="#D88584" fontSize="18px" fontWeight="600" textTransform="uppercase" mt="10px">
                {data?.names?.fr}
              </Typography>
              <Typography fontSize="15px" color="#BEC7DA">
                {data?.city?.name}
              </Typography>
            </a>
          ))}
        </Carousel>
      </Layout>
    </section>
  );
}

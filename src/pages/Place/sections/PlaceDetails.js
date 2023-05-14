import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import seat from '../../../assets/icons/seat.svg';
import park from '../../../assets/icons/park.svg';
import restaurant from '../../../assets/icons/restaurant.svg';
import shower from '../../../assets/icons/shower.svg';
import tv from '../../../assets/icons/tv.svg';
import wifi from '../../../assets/icons/wifi.svg';
import copy from '../../../assets/icons/copy.svg';
import globe from '../../../assets/icons/globe.svg';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import PlaceBooking from './PlaceBooking';
import { Link } from 'react-router-dom';
import Map from 'src/components/map';

const DetailLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '20px',
  padding: '0 30px 100px 30px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomRightRadius: '200px',
  },
}));

const EquipmentLayout = styled(Box)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  gap: '18px',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '15rem',
  },
}));

const Heading = styled(Typography)({
  color: 'black',
  fontSize: '22px',
  fontWeight: '600',
  marginBottom: '20px',
});

const Item = styled(Typography)({
  color: 'black',
  fontSize: '18px',
  fontWeight: '500',
});

export default function PlaceDetails(props) {
  const { data } = props;

  data && console.log(data);

  return (
    <DetailLayout>
      <Box sx={{ bgColor: '#000' }}>
        <section style={{ color: 'black', maxWidth: '40rem', mt: '30px' }}>
          <Typography dangerouslySetInnerHTML={{ __html: data && data.descriptions && data.descriptions.fr }}></Typography>
          <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        </section>
        <section>
          <Heading>Horaires d'ouverture</Heading>
          <Item dangerouslySetInnerHTML={{ __html: data && data.openingPeriod }}></Item>
        </section>
        <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        <section>
          <Heading>Tarifs</Heading>
          <Box
            color="black"
            fontSize="18px"
            ml="20px"
            dangerouslySetInnerHTML={{ __html: data && data.pricingText }}
          ></Box>
        </section>
        <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        <section>
          <Heading>Places disponibles</Heading>
          <Box
            sx={{ width: 'fit-content', border: '2px solid #EAEDF8', borderRadius: '20px', p: '18px 80px 18px 20px' }}
          >
            <img src={seat} alt="seat" />
            <Typography fontSize="17px" color="black" fontWeight="600" mt="15px">
              38 transats
            </Typography>
            <Typography fontSize="14px" color="black">
              Sur 110 au total
            </Typography>
          </Box>
        </section>
        <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        <section>
          <Heading>Équipements</Heading>
          <EquipmentLayout>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={park} alt="" />
                <Item>Parking</Item>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={restaurant} alt="" />
                <Item>Restaurant</Item>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={shower} alt="" />
                <Item>Douche</Item>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={wifi} alt="" />
                <Item>Wifi</Item>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={tv} alt="" />
                <Item>TV</Item>
              </Box>
            </Box>
          </EquipmentLayout>
        </section>
        <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        <section>
          <Heading>Emplacement</Heading>
          <Item>{data && data.addressLine1}</Item>
          <Item>{data && data.addressLine2}</Item>
          <Item>
            {data && data.zip} {data && data.city.name}
          </Item>
          <Button sx={{ mb: '30px', '&:hover': { backgroundColor: '#E8EDFF' }, borderRadius: '15px', mt: '15px' }}>
            <img src={copy} alt="" />
            <Typography ml="10px" fontSize="17px" color="black">
              Copier l’adresse
            </Typography>
          </Button>
          {data && data.lngLatPoint && (
            <Map
              latitude={data.lngLatPoint.coordinates && data.lngLatPoint.coordinates[0]}
              longitude={data.lngLatPoint.coordinates && data.lngLatPoint.coordinates[1]}
              sx={{
                height: '240px',
                borderRadius: '20px',
              }}
            />
          )}
        </section>
        <hr style={{ border: '1px solid #EAEDF8', margin: '30px 0' }} />
        <section>
          <Heading>Contacts</Heading>
          {data && (
            <Box sx={{ display: 'flex', gap: '30px' }}>
              <a href={data.websiteUrl} target="_blank" rel="noreferrer">
                <img src={globe} alt="globe" style={{ width: '40px' }} />
              </a>
              <a href={data.facebookUrl} target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" style={{ width: '40px' }} />
              </a>
              <a href={data.instagramUrl} target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" style={{ width: '40px' }} />
              </a>
            </Box>
          )}
          {data && (
            <Link to={`tel:${data.phone}`}>
              <Button
                sx={{
                  color: 'black',
                  fontSize: '17px',
                  fontWeight: '500',
                  border: '2px solid black',
                  borderRadius: '15px',
                  p: '6px 25px',
                  mt: '30px',
                  '&:hover': {
                    backgroundColor: '#E8EDFF',
                  },
                }}
              >
                Contacter l’établissement
              </Button>
            </Link>
          )}
        </section>
      </Box>
      <PlaceBooking />
    </DetailLayout>
  );
}

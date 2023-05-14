import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import BeachSearchComponent from 'src/components/shared/BeachSearchComponent';
import { useCallback, useState } from 'react';
import DatePickerComponent from 'src/components/shared/DatePickerComponent';
import SearchIcon from '@mui/icons-material/Search';
import TypographyWithLine from 'src/components/shared/TypographyWithLine';
import { useNavigate } from 'react-router-dom';

const backgroundImage = '/assets/images/home-bg.jpg';

export default function ProductHero() {
  const navigate = useNavigate();
  const [cityId, setCityId] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleOnchangeCustomer = useCallback((value) => {
    console.log(value, 'value');
  }, []);

  const handleNavigate = () => {
    if (!cityId) {
      return navigate(`/finder?city=${city}&&dfrom=${date}&zoom=7`);
    }
    return navigate(`/place/${cityId}?dfrom=${date}`);
  };

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
        <Stack item>
          <TypographyWithLine
            sx={{
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              width: '33rem',
              fontSize: '65px',
              '&:before': {
                position: 'absolute',
                width: '90px',
                backgroundColor: '#fff',
                height: '8px',
                top: '-35px',
                left: '210px',
                content: '""',
              },
            }}
            text="Réservez"
          />

          <TypographyWithLine
            text="votre transat"
            sx={{ mt: '4px', color: 'white', textAlign: 'center', fontWeight: '500', fontSize: '42px' }}
          />

          <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '600' }} textAlign={'center'}>
            1<sup>er</sup> site de réservation en temps réel
          </Typography>
          <Grid container direction={'row'} sx={{ mt: 4 }} spacing={2} justifyContent={'center'} fullWidth>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: '-20px',
              }}
            >
              <BeachSearchComponent
                va
                label="Or"
                handleOnchangeCustomer={handleOnchangeCustomer}
                setCityId={setCityId}
                setCity={setCity}
                style={{
                  '.MuiOutlinedInput-notchedOutline': {
                    borderRadius: '13px',
                    width: '100%',
                    borderColor: 'transparent',
                  },
                  '	.MuiAutocomplete-inputRoot': {
                    height: '75px',
                    width: '100%',
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                position: 'relative',
                marginTop: '-5px',
              }}
            >
              <DatePickerComponent
                setDate={setDate}
                className={'landing-calendar'}
                style={{
                  background: '#fff',
                  borderRadius: '19px',
                  '.MuiInputBase-input': {
                    marginTop: '10px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  border: 'none',
                  borderRadius: '14px',
                }}
                // onClick={() => navigate('/finder')}
                onClick={handleNavigate}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  color="#fff"
                  sx={{ height: '12px', mt: 1.1, width: '3px', mr: 1.5 }}
                />
                Rechercher
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </ProductHeroLayout>
  );
}

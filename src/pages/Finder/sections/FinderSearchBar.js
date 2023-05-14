import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import BeachSearchComponent from 'src/components/shared/BeachSearchComponent';
import DatePickerComponent from 'src/components/shared/DatePickerComponent';
import { useNavigate } from 'react-router-dom';
import search from '../../../assets/icons/search.svg';

export default function FinderSearchBar() {
  const navigate = useNavigate();
  const handleOnchangeCustomer = useCallback((value) => {
    console.log(value, 'value');
  }, []);

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleNavigate = () => {
    navigate(`/finder?city=${city}&&dfrom=${date}&zoom=7`);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '15rem',
        }}
      >
        <BeachSearchComponent
          label="Or"
          setCity={setCity}
          handleOnchangeCustomer={handleOnchangeCustomer}
          style={{
            '.MuiOutlinedInput-notchedOutline': {
              borderRadius: '13px',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
            },
            '	.MuiAutocomplete-inputRoot': {
              height: '47px',
            },
            '.MuiAutocomplete-input': {
              marginTop: '-20px',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: '15rem',
        }}
        position="relative"
      >
        <DatePickerComponent
          setDate={setDate}
          className={'landing-calendar'}
          style={{
            background: '#fff',
            '.MuiOutlinedInput-notchedOutline': {
              borderLeftWidth: '0',
              borderRightWidth: '0',
              borderRadius: '0',
              zIndex: '1',
            },
            '.MuiInputBase-input': {
              marginTop: '-16px',
            },
          }}
        />
      </Box>
      <Box sx={{ border: '2px solid #EAEDF8', p: '5px', marginLeft: '-8px', zIndex: '2', borderRadius: '13px' }}>
        <Box
          onClick={() => handleNavigate()}
          component="button"
          sx={{
            cursor: 'pointer',
            bgcolor: '#ff8478',
            p: '8px',
            border: 'none',
            outline: 'none',
            borderRadius: '13px',
            '&:hover': {
              bgcolor: '#E55446',
            },
          }}
        >
          <Box component="img" src={search} width="19px"></Box>
        </Box>
      </Box>
    </Box>
  );
}

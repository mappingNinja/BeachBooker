import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import BeachSearchComponent from 'src/components/shared/BeachSearchComponent';
import search from '../../../assets/icons/search.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Layout = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '12px',
  left: 'calc(50vw - 10rem)',
  zIndex: '20',
  display: 'none',
  margin: 'auto',
  width: 'fit-content',
  borderRadius: '15px',
  border: '2px solid #EAEDF8',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const SearchBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '20rem',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    width: '25rem',
  },
}));

const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get('dfrom');

export default function PlaceSearch() {
  const navigate = useNavigate();
  const [cityId, setCityId] = useState('');
  const [city, setCity] = useState('');

  const handleOnchangeCustomer = useCallback((value) => {
    console.log(value, 'value is in the ');
  }, []);

  const handleSearch = () => {
    const { search } = window.location;
    return navigate(`/place/${cityId}${search}`);
  };
  return (
    <Layout>
      <SearchBar>
        <BeachSearchComponent
          setCity={setCity}
          setCityId={setCityId}
          label="Rechercher"
          handleOnchangeCustomer={handleOnchangeCustomer}
          style={{
            '.MuiOutlinedInput-notchedOutline': {
              borderRadius: '13px',
              borderColor: 'transparent',
            },
            '	.MuiAutocomplete-inputRoot': {
              height: '45px',
            },
            '.MuiAutocomplete-input': {
              marginTop: '-20px',
            },
          }}
        />
        <Box
          sx={{
            borderColor: '#EAEDF8',
            borderStyle: 'solid',
            borderLeftWidth: '2px',
            borderRightWidth: '0',
            borderTopWidth: '0',
            borderBottomWidth: '0',
            p: '6px',
            borderRadius: '13px',
          }}
        >
          <Box
            onClick={handleSearch}
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
            <Box component="img" src={search} width="25px"></Box>
          </Box>
        </Box>
      </SearchBar>
    </Layout>
  );
}

/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getHutList } from 'src/services/api/admin.api';
import PlaceHero from './sections/PlaceHero';
import PlaceDetails from './sections/PlaceDetails';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import PlaceAround from './sections/PlaceAround';
import PlaceSearch from './sections/PlaceSearch';

const Layout = styled(Box)(({theme}) => ({
    backgroundColor: '#fff',
    borderBottomRightRadius: '50px',
    [theme.breakpoints.up('lg')]: {
        borderBottomRightRadius: '200px'
    }
}))

export default function PlaceDetailsPage() {
  const [details, setDetails] = useState(null);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const filterData = (data, id) => {
    const filtData = data.filter((e) => {
      return e.id === Number(id);
    });
    return filtData[0];
  };

  const hutListData = async () => {
    const res = await getHutList({
      isPartner: true,
      count: 10,
      sort: 'id',
      include: ['imageFiles', 'city'],
    });

    if (res) {
      setData(res);
      setDetails(res[0]);
    }
  };
  

  useEffect(() => {
    hutListData();
  }, []);

  useEffect(() => {
    console.log(details, 'data');
  }, [details]);

  
  return (
    <>
      <Helmet>
        <title> Place Booker | Beach Booker </title>
      </Helmet>
      <PlaceSearch />
      <Box sx={{backgroundColor: '#FBECEB', fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(',')}}>
        <Layout>
          <Box sx={{ mx: 'auto', width: 'fit-content' }}>
            <PlaceHero data={filterData(data, id)} />
            <PlaceDetails data={filterData(data, id)} />
          </Box>
        </Layout>
      </Box>
      <PlaceAround dataObj={data} />
    </>
  );
}

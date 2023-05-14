import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import umbrella from '../../../assets/icons/umbrella.svg';

const HeroLayout = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  padding: '40px 20px',
  margin: 'auto'
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '85vw',
  height: '25rem',
  gap: '10px',
  [theme.breakpoints.up('xl')]: {
    width: '85vw',
  }
}));

const ImgContainer1 = styled(Box)(({ theme }) => ({
  width: '100%',
}));

const ImgContainer2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px'
}));

const SubImgContainer1 = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: '10px'
}));

const SubImgContainer2 = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export default function PlaceHero(props) {
  const { data } = props;
  return (
    <HeroLayout>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: '20px' }}>
        <Typography fontSize="30px" fontWeight="600" color="#06133A">
          {data && data.names && data.names.fr}
        </Typography>
        <img src={umbrella} alt="umbrella" style={{ margin: '0 8px 0 15px' }} />
        <Typography
          color="#06133A"
          fontSize="10px"
          fontWeight="600"
          padding="4px 5px"
          borderRadius="5px"
          width="fit-content"
          bgcolor="#FCEEED"
        >
          Partnenaire
        </Typography>
      </Box>
      <Container>
        {data && data.imageFiles[0] && (
          <ImgContainer1>
            <Box
              sx={{
                backgroundImage: `url(${data.imageFiles[0].url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '100% 100%',
                width: '100%',
                height: '100%',
                borderRadius: '20px'
              }}
              ></Box>
          </ImgContainer1>
        )}
        {data && data.imageFiles[1] && (
          <ImgContainer2>
            <SubImgContainer1>
              <Box
                sx={{
                  backgroundImage: `url(${data.imageFiles[1].url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundSize: '100% 100%',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px'
                }}
                ></Box>
              {data && data.imageFiles[2] && (
                <Box
                sx={{
                  backgroundImage: `url(${data.imageFiles[2].url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundSize: '100% 100%',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px'
                }}
                ></Box>
              )}
            </SubImgContainer1>
            {data && data.imageFiles[3] && (
              <SubImgContainer2>
                <Box
                  sx={{
                    backgroundImage: `url(${data.imageFiles[3].url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px'
                  }}
                ></Box>
              </SubImgContainer2>
            )}
          </ImgContainer2>
        )}
      </Container>
    </HeroLayout>
  );
}

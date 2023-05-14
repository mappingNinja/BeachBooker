import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Slider from 'react-slick';
import { useState } from 'react';
import { getHutList } from 'src/services/api/admin.api';
import { useNavigate } from 'react-router-dom';

const CarouselItem = ({ item }) => {
  const navigate = useNavigate();
  const { names = null, imageFiles = [], city = null, id } = item;
  return (
    <Card
      sx={{ boxShadow: 'none', display: 'flex', justifyContent: 'center', '&:hover': { bgcolor: 'secondary.light', cursor: 'pointer' } }}
      onClick={() => {
        if (id) {
          navigate(`/place/${id}`);
        }
      }}
    >
      <CardContent>
        <Grid container direction={'row'} justifyItems={'center'} spacing={1} alignItems={'center'}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: '206px',
                height: '200px',
                borderRadius: '48px',
                backgroundImage: `url(${imageFiles.length > 0 ? imageFiles[0]['url'] : null})`,
                backgroundPosition: 'center center',
                backgroundSize: '100% 100%',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '1.2rem' }} color="secondary.main" textAlign={'center'} gutterBottom>
              {names ? names?.fr : null}
            </Typography>
            <Typography sx={{ fontSize: '14px' }} color="#bcc1d1" textAlign={'center'} gutterBottom>
              {city ? city.name : null}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', marginTop: '-25px' }} onClick={onClick} />;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', marginTop: '-25px' }} onClick={onClick} />;
}

export default function PartnerBeachSlider() {
  const [data, setData] = useState();

  const hutListData = async () => {
    const res = await getHutList({
      isPartner: true,
      count: 10,
      sort: 'id',
      include: ['imageFiles', 'city'],
    });
    if (res) {
      setData(res);
    }
  };

  React.useEffect(() => {
    hutListData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {data &&
        data.map((item) => (
          <div>
            <CarouselItem item={item} />
          </div>
        ))}
    </Slider>
  );
}

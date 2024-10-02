// src/components/Dashboard.js
import React from 'react';
import POS from './POS';
import BackOffice from './BackOffice';
import KDS from './KDS';
import Slider from "react-slick";
import { Container, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        NCRVoyix Restaurant Solutions
      </Typography>
      
      <Slider {...settings}>
        <div>
          <POS />
        </div>
        <div>
          <KDS />
        </div>
        <div>
          <BackOffice />
        </div>
      </Slider>
    </Container>
  );
};

export default Dashboard;

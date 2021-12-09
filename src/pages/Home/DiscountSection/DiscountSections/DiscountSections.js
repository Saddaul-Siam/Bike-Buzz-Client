import { Container, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import PrimaryButton from '../../../../StyledComponent/MuiButton';
import Timer from '../Timer/Timer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const DiscountSections = () => {
  const history = useHistory();
  const theme = useTheme();
  const useStyle = makeStyles({
    background: {
      [theme.breakpoints.up('sm')]: {
        backgroundImage: `url("https://i.ibb.co/2q1DsNr/sebastien-gabriel-Ri-Re-CZqe-As-unsplash-1.png")`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "650px",
        marginTop: "100px"
      },
      [theme.breakpoints.down('md')]: {
        backgroundImage: `linear-gradient(#F5F7FF,#F5F7FF)`
      },
    },
    imgPadding: {
      [theme.breakpoints.up('sm')]: {
        paddingTop: "225px"
      },
    },
    timerColor: {
      [theme.breakpoints.up('sm')]: {
        color: "white",
      },
      [theme.breakpoints.down('sm')]: {
        color: "#6047EC !important",
        fontSize: "24px"
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: "27px"
      },
    },
    subTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: "24px"
      },
    }

  })
  const { background, discountBackground, imgPadding, timerColor, title, subTitle } = useStyle();

  const handleClick = () => {
    console.log('click');
    history.push("/orders/618bfc58dd92a1d8cb2a988d")
  }
  return (
    <Box className={background}>
      <Container className={discountBackground}>
        <Grid container spacing={2}>
          <Grid data-aos="fade-down-right" item xs={12} md={6} >
            <Typography variant="h2" className={imgPadding}>
              <img style={{ width: '100%' }} src="https://i.ibb.co/VjKRgpD/aprilia-rsv-1000.png" alt="" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <Typography className={title} variant="h2" sx={{ fontWeight: 600, fontSize: 40 }}>
                APRILIA RSV 1000R MILLE
              </Typography>
              <Typography className={subTitle} variant="h4" sx={{ fontWeight: 600, pt: 2, fontSize: 32, color: '#666' }}>
                Discount up to 10%
              </Typography>
              <Typography className={subTitle} variant="h4" sx={{ fontWeight: 600, pt: 2, fontSize: 32, color: '#666' }}>
                Available Time
              </Typography>
              <Typography className={timerColor} variant="h4" sx={{ fontWeight: 600 }}>
                <Timer></Timer>
              </Typography>
              <PrimaryButton onClick={() => handleClick()}>VIEW Details</PrimaryButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DiscountSections;
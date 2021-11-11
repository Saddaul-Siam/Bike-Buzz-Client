import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/banner-bg.png'

const Banner = () => {

  const useStyle = makeStyles({
    root: {
      height: '90vh',
      marginTop: '65px',
    },
    background: {
      backgroundImage: `url(${bg}), linear-gradient(#e7dfdf,#fff)`,
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  })

  const { root, background } = useStyle()

  return (
    <Box className={background} >
      <Grid className={root} container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <img width="100%" src="https://i.ibb.co/fXkPw6g/banner.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{  display: 'flex', alignItems: 'center' }}>
          <Box sx={{ alignItems: 'center' }} >
            <Typography variant="h2" sx={{ fontWeight: 600 }}>
              EVERYTHING <br /> MOTORSPORTS
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18, color: 'gray', py: 3 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aliquam amet possimus,<br /> nemo quis eaque  quae quaerat earum aspernatur cumque!
            </Typography>
            <MuiButton>VIEW MORE</MuiButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
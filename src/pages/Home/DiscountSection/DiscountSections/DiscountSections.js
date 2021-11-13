import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import PrimaryButton from '../../../../StyledComponent/MuiButton';
import Timer from '../Timer/Timer';

const DiscountSections = () => {
  const history = useHistory()
  const useStyle = makeStyles({
    background: {
      backgroundImage: `url("https://i.ibb.co/2q1DsNr/sebastien-gabriel-Ri-Re-CZqe-As-unsplash-1.png")`,
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: "650px",
      marginTop: "100px"
    },
  })
  const { background } = useStyle();

  const handleClick = () => {
    console.log('click');
    history.push("/orders/618bfc58dd92a1d8cb2a988d")
  }
  return (
    <Box className={background}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Typography variant="h2" sx={{ mt: 28 }}>
              <img style={{ width: '100%' }} src="https://i.ibb.co/VjKRgpD/aprilia-rsv-1000.png" alt="" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <Typography className="" variant="h2" sx={{ fontWeight: 600, fontSize: 40 }}>
                APRILIA RSV 1000R MILLE
              </Typography>
              <Typography className="" variant="h4" sx={{ fontWeight: 600, pt: 2,fontSize:32 ,color: '#666'}}>
                Discount up to 10%
              </Typography>
              <Typography className="" variant="h4" sx={{ fontWeight: 600, pt: 2,fontSize:32 ,color: '#666'}}>
                Available Time
              </Typography>
              <Typography className="" variant="h4" sx={{ fontWeight: 600, color: '#fff' }}>
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
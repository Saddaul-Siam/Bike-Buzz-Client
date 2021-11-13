import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DashboardHome = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FF1493', display: 'flex', justifyContent: 'center', py: 3 }}>Dashboard Home </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' ,pt:10}}>
            Welcome to the Dashboard Home
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src="https://i.ibb.co/QCCkQT7/setup-analytics-concept-illustration-114360-1438.jpg" alt="" />
        </Grid>
      </Grid>
    </Box >
  );
};

export default DashboardHome;
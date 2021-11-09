import { Container, Grid } from '@mui/material';
import React from 'react';
import { services } from '../../../data/data';
import Service from '../Service/Service';

const Services = () => {
  const service = services
  return (
    <Container>
      <h2>This is a Services {service.length}</h2>
      <Grid container spacing={2} >
        {
          service.map((data) => <Service data={data}></Service>)
        }
      </Grid>
    </Container>
  );
};

export default Services;
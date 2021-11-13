import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import PrimaryButton from '../../StyledComponent/MuiButton';
const NotFound = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push('/home')
  }
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
      <Box>
        <img src="https://i.ibb.co/jww2J8G/error.png" alt="" />
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <Box>
            <Typography>Page Not Found!</Typography>
            <Typography>Please try searching for some other page.</Typography>
            <PrimaryButton onClick={handelClick} >Back to Home</PrimaryButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
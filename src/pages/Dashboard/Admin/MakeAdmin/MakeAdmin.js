import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import { Box, typography } from '@mui/system';
import { Button, Container, TextField, Typography } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';

const MakeAdmin = () => {
  const { user } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h2>make Admin</h2>
      <Container>
        <Box >
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 3 }}>Make A Admin</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField style={{ width: '100%', height: '50px' }} label="Email"  {...register("name")} variant="filled" />
            <Button sx={{mt:3}} variant="outlined" type="submit">Make Admin</Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default MakeAdmin;
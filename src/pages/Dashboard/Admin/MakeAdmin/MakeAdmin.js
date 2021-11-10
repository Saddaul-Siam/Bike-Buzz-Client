import React from 'react';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Button, Container, TextField, Typography } from '@mui/material';

const MakeAdmin = () => {
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
            {errors.exampleRequired && <span>This field is required</span>}
            <Button sx={{ mt: 3 }} variant="outlined" type="submit">Make Admin</Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default MakeAdmin;
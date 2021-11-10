import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Button, Container, TextField, Typography } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
const AddAProducts = () => {
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // console.log(data)
    fetch(`http://localhost:5000/addProducts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => console.log(result))
  };

  const useStyle = makeStyles({
    textArea: {
      width: '100%',
      margin: '20px 0',
      borderRadius: 3,
      fontFamily: 'inherit',
      padding: 15
    }
  })
  const { textArea } = useStyle()
  return (
    <Container>
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 600, pb: 3 }}>Add a Products</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField style={{ width: '100%' }} label="Products name"  {...register("name")} variant="outlined" />
          <br />
          <br />
          <TextField style={{ width: '100%' }} label="Price"  {...register("price")} variant="outlined" />
          <br />
          <br />
          <TextField style={{ width: '100%' }} label="Images url"  {...register("img")} variant="outlined" />

          <textarea className={textArea} rows={5} placeholder="Description" {...register("description")} /> <br />

          {errors.exampleRequired && <span>This field is required</span>}
          <Button variant="outlined" type="submit">Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddAProducts;
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Button, Container, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const { user } = useAuth()
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const useStyle = makeStyles({
    rating: {
      outline: 0,
      width: '100%',
      marginBottom: '20px',
      borderRadius: 3,
      fontFamily: 'inherit',
      padding: 15
    },
    textArea: {
      // border: 0,
      outline: 0,
      width: '100%',
      margin: '20px 0',
      borderRadius: 3,
      fontFamily: 'inherit',
      padding: 15
    }
  })
  const { rating, textArea } = useStyle()
  return (
    <Container>
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 600, pb: 3 }}>Review our services</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField style={{ width: '100%', height: '50px' }} label="Name" value={user.displayName} {...register("name")} variant="outlined" />

          <textarea className={textArea} rows={5} placeholder="Review" {...register("review")} /> <br />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Please Rating now
          </Typography>
          <select className={rating} {...register("rating")}>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <Button variant="outlined" type="submit">Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Review;
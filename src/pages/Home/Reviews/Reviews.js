import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);


  return (
    <Container sx={{ mt:10}}>
      <Grid container spacing={2}>
        {
          reviews.map((review) => <Review key={review._id} review={review}></Review>)
        }
      </Grid>
    </Container>
  );
};

export default Reviews;
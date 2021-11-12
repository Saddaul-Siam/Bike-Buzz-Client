import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 4;
  useEffect(() => {
    fetch(`https://bike-buzz.herokuapp.com/reviews?page=${page}&&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      })
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        {
          reviews.map((review) => <Review key={review._id} review={review}></Review>)
        }
      </Grid>
      <Stack spacing={2}>
        <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
          {
            <Pagination count={pageCount} color="secondary" variant="outlined" /* color="primary" */ onChange={handleChange} />
          }
        </Box>
      </Stack>
    </Container >
  );
};

export default Reviews;
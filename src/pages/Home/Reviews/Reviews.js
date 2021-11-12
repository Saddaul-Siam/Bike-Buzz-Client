import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';


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

  const useStyle = makeStyles({
    reviewBackground: {
      backgroundImage: `linear-gradient(#F5F7FF,#F5F7FF)`,
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  });
  const { reviewBackground } = useStyle();
  return (
    <Box className={reviewBackground}>
      <Container sx={{ mt: 10, pb: 10 }}>

        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: "34px", display: 'flex', justifyContent: 'center', py: 10 }}>Feedback from users about the website</Typography>
        <Grid container spacing={1}>
          {
            reviews.map((review) => <Review key={review._id} review={review}></Review>)
          }
        </Grid>
        <Stack spacing={2}>
          <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
            {
              <Pagination count={pageCount} variant="outlined" color="primary" onChange={handleChange} />
            }
          </Box>
        </Stack>
      </Container >
    </Box>
  );
};

export default Reviews;
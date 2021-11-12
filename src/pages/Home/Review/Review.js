import { Grid, Paper, Typography } from '@mui/material';
import React from "react";

const Review = ({ review }) => {

  return (
    <Grid item xs={4} sm={4} md={3}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6">
          {review.name}
        </Typography>
        <Typography variant="subtitle">
          {review.email}
        </Typography>
        <Typography variant="subtitle">
          {review.review}
        </Typography>
        <Typography variant="h6">
          {review.rating}
        </Typography>
      </Paper>

    </Grid>
  );
};

export default Review;
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import BestSellerBike from "../BestSellerBike/BestSellerBike";

const BestSellerBikes = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://bike-buzz.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(7, 13);
        setProducts(sliceData);
      });
  }, []);
  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          pb: 1,
          mb: 5,
          borderBottom: '3px solid #DAA520',
        }}
      >
        Best Seller Bike
      </Typography>
      <Grid container spacing={5}>
        {products.map((product) => (
          <BestSellerBike key={product._id} product={product}></BestSellerBike>
        ))}
      </Grid>
    </Container>
  );
};

export default BestSellerBikes;

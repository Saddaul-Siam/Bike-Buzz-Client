import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BestSellerBikes from "../BestSellerBikes/BestSellerBikes/BestSellerBikes";
import DiscountSections from "../DiscountSection/DiscountSections/DiscountSections";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <DiscountSections />
      <BestSellerBikes />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;

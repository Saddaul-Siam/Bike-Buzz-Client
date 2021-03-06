import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BestSellerBikes from "../BestSellerBikes/BestSellerBikes/BestSellerBikes";
import BlogPosts from "../BlogPosts/BlogPosts/BlogPosts";
import Contact from "../Contact/Contact";
import DiscountSections from "../DiscountSection/DiscountSections/DiscountSections";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

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
      <BlogPosts />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

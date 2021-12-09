import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box } from "@mui/system";
import SpeedIcon from "@mui/icons-material/Speed";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";

const BestSellerBike = ({ product }) => {
  return (
    <Grid item xs={12} md={4}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/orders/${product._id}`}
      >
        <Paper>
          <Box className="images">
            <CardMedia
              component="img"
              height="200"
              image={product.img}
              alt="bike"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", py: 2 }}>
              {product.name}
            </Typography>
            <Typography
              sx={{ fontSize: "1.4rem", color: "rgba(0, 0, 0, 0.6)", pb: 3 }}
            >
              <AttachMoneyIcon />
              {product.price}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", pb: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <Box>
                <SpeedIcon />
              </Box>
              <Box>290</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <Box>
                <PublicIcon />
              </Box>
              <Box>indonesia</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <Box>
                <EventNoteIcon />
              </Box>
              <Box>2020</Box>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default BestSellerBike;

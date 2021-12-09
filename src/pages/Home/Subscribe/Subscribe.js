import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../../../StyledComponent/MuiButton";

const Subscribe = () => {
  return (
    <Container sx={{ py: 20 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            pb: 1,
            mb: 5,
          }}
        >
          GET NOTIFIED OF ANY UPDATES!
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          sx={{ width: "25%", mr: 2 }}
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
        />
        <PrimaryButton variant="contained">Subscribe</PrimaryButton>
      </Box>
    </Container>
  );
};

export default Subscribe;

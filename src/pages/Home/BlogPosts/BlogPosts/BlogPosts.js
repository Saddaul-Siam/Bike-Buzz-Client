import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyle = makeStyles({
  text: {
    color: "black",
    "&:hover": {
      color: "#ff4d4d",
    },
  },
});
const BlogPosts = () => {
  const { text } = useStyle();
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          py: 3,
          mb: 5,
          borderBottom: "3px solid #DAA520",
        }}
      >
        Our Blog Posts
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ background: "#f2f2f2" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/1.jpg"
              alt="Paella dish"
            />
            <Container>
              <Box sx={{ borderBottom: "1px solid #DAA520", pb: 3 }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600, py: 2 }}>
                  Froome racing to spoil Yates's pink Giro dream
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#666666" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 3,
                  cursor: "pointer",
                }}
                className={text}
              >
                <Box>
                  <Typography>Read More</Typography>
                </Box>
                <Box>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ background: "#f2f2f2" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/2.jpg"
              alt="Paella dish"
            />
            <Container>
              <Box sx={{ borderBottom: "1px solid #DAA520", pb: 3 }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600, py: 2 }}>
                  Sed ut perspiciatis unde omnis iste natus sit
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#666666" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 3,
                  cursor: "pointer",
                }}
                className={text}
              >
                <Box>
                  <Typography>Read More</Typography>
                </Box>
                <Box>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ background: "#f2f2f2" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/3.jpg"
              alt="Paella dish"
            />
            <Container>
              <Box sx={{ borderBottom: "1px solid #DAA520", pb: 3 }}>
                <Typography sx={{ fontSize: "22px", fontWeight: 600, py: 2 }}>
                  Quis autem vel eum tempore voluptate
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#666666" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 3,
                  cursor: "pointer",
                }}
                className={text}
              >
                <Box>
                  <Typography>Read More</Typography>
                </Box>
                <Box>
                  <ArrowForwardIcon />
                </Box>
              </Box>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPosts;

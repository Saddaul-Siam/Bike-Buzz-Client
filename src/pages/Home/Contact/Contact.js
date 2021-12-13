/* import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../../../StyledComponent/MuiButton";

const Subscribe = () => {
  return (
    <Box >
      <Container sx={{ py: 20 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
    </Box>
  );
};

export default Subscribe;
 */

import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_olsyzbs",
        "template_ga89sks",
        e.target,
        "user_zY9PhOZfd0w62teBhlcuR"
      )
      .then(
        (result) => {
          if (result.text) {
            alert("message send successfully");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        e.target.reset();
      });
  };
  return (
    <Container sx={{ py: 20 }} id="contact">
      <Box sx={{ display: "flex", justifyContent: "center", pb: 5 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 40, color: "#3C3E41" }}>
          Contact Us
        </Typography>
      </Box>
      <Grid container spacing={7}>
        <Grid
          item
          xs={12}
          md={5}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <Paper
            sx={{ p: 3, pb: 22.5, backgroundColor: "#ECF0F3 !important" }}
            elevation={3}
          >
            <img
              width="100%"
              src="https://i.ibb.co/9YkgSrL/contact1.png"
              alt=""
            />
            <Typography variant="h4" sx={{ pt: 2 }}>
              Bike Buzz LTD.
            </Typography>

            <Typography sx={{ pt: 2, fontSize: "18px" }}>
              Phone: +8801311333277
              <br />
              Email: saddaul.siam@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              FIND WITH OUR TEAM
            </Typography>
            <Typography>
              <a
                href="https://www.facebook.com/saddaul-siam/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <FacebookIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/saddaul-siam/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/saddaul.siam/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton size="large">
                  <InstagramIcon />
                </IconButton>
              </a>
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos="zoom-in"
        >
          <Paper
            sx={{ p: 3, backgroundColor: "#ECF0F3 !important" }}
            elevation={3}
          >
            <form onSubmit={sendEmail}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">YOUR NAME</Typography>
                  <TextField
                    required
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="name"
                    id="outlined-basic"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">PHONE NUMBER </Typography>
                  <TextField
                    required
                    id="outlined-basic"
                    sx={{ width: "100%", backgroundColor: "#fff" }}
                    name="phone"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Typography variant="body2" sx={{ pt: 3 }}>
                EMAIL
              </Typography>
              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", mb: 3, backgroundColor: "#fff" }}
                name="email"
                variant="outlined"
              />
              <Typography variant="body2">SUBJECT</Typography>
              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", mb: 3, backgroundColor: "#fff" }}
                name="subject"
                variant="outlined"
              />
              <Typography variant="body2">YOUR MESSAGE</Typography>
              <textarea
                rows="10"
                style={{
                  width: "100%",
                  border: "none",
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  resize: "none",
                }}
                name="message"
              />
              <br />
              <Button
                type="submit"
                sx={{ width: "100%", my: 3, py: 2 }}
                variant="contained"
              >
                SEND MESSAGE
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

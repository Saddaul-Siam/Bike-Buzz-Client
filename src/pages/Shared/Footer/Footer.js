import { Container, Grid, IconButton, List, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Footer = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        socialIcon: {
            color: '#fff !important',
            margin: '20px 10px 30px 0 !important',
        },
        bg: {
            backgroundColor: '#6047EC !important',
        },
        display: {
            [theme.breakpoints.down('md')]: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            },
        }
    });
    const { socialIcon, bg, display } = useStyle();
    return (
        <footer className={bg}>
            <Container >
                <Grid className={display} container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>

                            <ListItemText sx={{ pb: 3 }}><NavLink style={{ textDecoration: 'none', color: '#FF1493', fontWeight: 700, fontSize: '24px' }} to="/">BIKE BUZZ</NavLink></ListItemText>

                            <IconButton className={socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                            <ListItemText>
                                <Typography>
                                    This website create by saddaul siam
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>

                            <ListItemText>
                                <Typography sx={{ pb: 3, textDecoration: 'none', color: '#FF1493', fontWeight: 700, fontSize: '24px' }}>
                                    Company
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{py:1}}>About Us</ListItemText>
                            <ListItemText sx={{py:1}}>Leadership</ListItemText>
                            <ListItemText sx={{py:1}}>Team</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>
                            <ListItemText>
                                <Typography sx={{ pb: 3, textDecoration: 'none', color: '#FF1493', fontWeight: 700, fontSize: '24px' }}>
                                    Support
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{py:1}}>Help Center</ListItemText>
                            <ListItemText sx={{py:1}}>FAQ</ListItemText>
                            <ListItemText sx={{py:1}}>Contact Us</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>
                            <ListItemText>
                                <Typography sx={{ pb: 3, textDecoration: 'none', color: '#FF1493', fontWeight: 700, fontSize: '24px' }}>
                                    Contact Info
                                </Typography>
                            </ListItemText>
                            <ListItemText sx={{pb:1}}><LocationOnIcon /> Pabna Dhaka Bangladesh</ListItemText>
                            <ListItemText sx={{py:1}}><EmailIcon /> saddadul.siam@gmail.com</ListItemText>
                        </List>

                        <Typography sx={{ color: '#fff' }}>Call Now</Typography>
                        <Typography sx={{ color: '#fff', pt: 1 }}><PhoneIphoneIcon /> +8801311333277</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4, color: '#fff' }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer >
    );
};

export default Footer;
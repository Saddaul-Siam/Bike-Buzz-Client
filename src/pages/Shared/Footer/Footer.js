import { Container, Grid, IconButton, List, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';

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
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                            <ListItemText>Services</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, color: '#fff' }}>
                            <ListItemText>Our Address</ListItemText>
                            <ListItemText>Pabna Dhaka Bangladesh</ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <Typography sx={{ color: '#fff' }}>Call Now</Typography>
                        <Typography sx={{ color: '#fff' }}>+8801311333277</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4, color: '#fff' }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer >
    );
};

export default Footer;
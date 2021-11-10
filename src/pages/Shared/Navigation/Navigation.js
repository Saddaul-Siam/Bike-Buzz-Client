import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navigation = (props) => {
  const { user, logOut } = useAuth()
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Link style={{ textDecoration: 'none', color:'white' }}to="/home"><Button color="inherit">Home</Button></Link>
            <Link style={{ textDecoration: 'none', color:'white' }}to="/explore"><Button color="inherit">Explore</Button></Link>
            
            {user?.email &&
              <Box>
                <Link style={{ textDecoration: 'none', color:'white' }}to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                <Button sx={{color:'white'}}  color="inherit">{user.displayName}</Button>
                {/* <img style={{ width:50, }} src={user.photoURL} alt="" /> */}
              </Box>}

            {user.email ?
              <Button color="inherit" onClick={logOut}>Log Out</Button>
              : <Link style={{ textDecoration: 'none', color:'white' }}to="/login"><Button color="inherit">Login</Button></Link>}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default Navigation;
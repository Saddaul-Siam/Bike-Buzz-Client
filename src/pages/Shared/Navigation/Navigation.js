import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';


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
  const useStyle = makeStyles({
    navbarColor: {
      backgroundColor: '#6047EC !important',
      padding: "5px 0"
    }

  });
  const { navbarColor } = useStyle();
  const { user, logOut } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {user?.email && <MenuItem onClick={handleMenuClose}>{user.displayName}</MenuItem>}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/home"><Button color="inherit">Home</Button></Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/explore"><Button color="inherit">Explore</Button></Link>
      </MenuItem>

      {user?.email && <MenuItem> <Link style={{ textDecoration: 'none', color: 'black' }} to="/dashboard"><Button color="inherit">Dashboard</Button></Link> </MenuItem>}

      <MenuItem>
        {user.email ?
          <Button color="inherit" onClick={logOut}>Log Out</Button>
          : <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"><Button color="inherit">Login</Button></Link>}
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (

    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar className={navbarColor}>
          <Container>
            <Toolbar sx={{ p: "0 !important" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">BIKE BUZZ</NavLink>
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Home</Link></Button>
                <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/explore">Explore</Link></Button>
                {user?.email &&
                  <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</Link></Button>}
                {user.email ?
                  <Button color="inherit" onClick={logOut}>Log Out</Button>
                  : <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></Link>}
                {user.email && <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>}
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
      {renderMenu}
    </Box>

  );
}
export default Navigation;

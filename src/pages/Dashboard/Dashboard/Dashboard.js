import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddAProducts from '../Admin/AddAProducts/AddAProducts';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {user.email && <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
        <List>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>Welcome {user.displayName}</Typography>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}><Button color="inherit" sx={{ px: 0 }}>Pay</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><Button color="inherit">Continue to shopping</Button></Link>
          <br />
          <Button color="inherit" onClick={logOut}>Log Out</Button>
        </List>
      </Box >}

      <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
        <List>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>Welcome {user.displayName}</Typography>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageAllOrders`}><Button color="inherit" sx={{ px: 0 }}>Manage All Orders</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addAProduct`}><Button color="inherit">Add A Product</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
          <br />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
          <br />
          <Button color="inherit" onClick={logOut}>Log Out</Button>
        </List>
      </Box >
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </Route>
          <Route path={`${path}/addAProduct`}>
            <AddAProducts />
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;



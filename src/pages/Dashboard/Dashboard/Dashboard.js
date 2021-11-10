import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';

const drawerWidth = 240;

export default function Dashboard() {
  const { logOut, user } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {user.email && <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
          <List>
            <Box> {user.displayName}</Box>
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
        </Box>}

        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
          <List>
            <Box> {user.displayName}</Box>
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
        </Box>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}



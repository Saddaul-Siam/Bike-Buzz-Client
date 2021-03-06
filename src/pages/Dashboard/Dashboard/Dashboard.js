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
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddAProducts from '../Admin/AddAProducts/AddAProducts';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Pay from '../Pay/Pay';
import { makeStyles } from '@mui/styles';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';





const drawerWidth = 350;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
    menuStyle: {
      textDecoration: 'none',
      color: 'black',
      display: 'block',
      paddingBottom: 5,
      margin: 10,
    }
  })
  const { menuStyle } = useStyle()
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {admin ? "" : <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
        <List>
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "24px" }}>Welcome <span style={{ color: '#6047EC' }}>{user.displayName}</span></Typography>
          <Link className={menuStyle} to="/"><Button sx={{ fontWeight: 700, mt: 5 }} color="inherit"><HomeIcon sx={{ mr: 2 }} />Home</Button></Link>
          <Link className={menuStyle} to={`${url}/pay`}><Button sx={{ fontWeight: 700 }} color="inherit"><PaymentIcon sx={{ mr: 2 }} /> Pay</Button></Link>

          <Link className={menuStyle} to={`${url}/myOrders`}><Button sx={{ fontWeight: 700 }} color="inherit"><BookmarkBorderIcon sx={{ mr: 2 }} /> My Orders</Button></Link>

          <Link className={menuStyle} to={`${url}/review`}><Button sx={{ fontWeight: 700 }} color="inherit"><RateReviewIcon sx={{ mr: 2 }} /> Review</Button></Link>

          <Link className={menuStyle} to="/explore"><Button sx={{ fontWeight: 700 }} color="inherit"><AddShoppingCartIcon sx={{ mr: 2 }} /> Continue to shopping</Button></Link>

          <Button className={menuStyle} color="inherit" sx={{ fontWeight: 700 }} onClick={logOut}><LogoutIcon sx={{ mr: 2 }} /> Log Out</Button>
        </List>
      </Box >}

      {
        admin && <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'start' }}>
          <List>
            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "24px" }}>Welcome <span style={{ color: '#6047EC' }}>{user.displayName}</span></Typography>

            <Link className={menuStyle} to="/"><Button sx={{ fontWeight: 700, mt: 5 }} color="inherit"><HomeIcon sx={{ mr: 2 }} />Home</Button></Link>

            <Link className={menuStyle} to={`${url}/manageAllOrders`}><Button sx={{ fontWeight: 700 }} color="inherit"><ManageAccountsIcon sx={{ mr: 2 }} /> Manage All Orders</Button></Link>

            <Link className={menuStyle} to={`${url}/addAProduct`}><Button sx={{ fontWeight: 700 }} color="inherit"><AddTaskIcon sx={{ mr: 2 }} /> Add A Product</Button></Link>

            <Link className={menuStyle} to={`${url}/makeAdmin`}><Button sx={{ fontWeight: 700 }} color="inherit"><AddCircleOutlineIcon sx={{ mr: 2 }} /> Make Admin</Button></Link>

            <Link className={menuStyle} to={`${url}/manageProducts`}><Button sx={{ fontWeight: 700 }} color="inherit"><ManageAccountsIcon sx={{ mr: 2 }} /> Manage Products</Button></Link>

            <Button className={menuStyle} sx={{ fontWeight: 700 }} color="inherit" onClick={logOut}><LogoutIcon sx={{ mr: 1 }}/>Log Out</Button>
          </List>
        </Box >
      }
    </div >
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
          <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
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
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <AddReview />
          </Route>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/addAProduct`}>
            <AddAProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
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



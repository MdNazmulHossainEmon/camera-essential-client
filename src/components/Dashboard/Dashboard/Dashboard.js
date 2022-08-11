import * as React from 'react';
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
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css"
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';


const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {logOut} = useAuth();
    // let { path, url } = useMatch ();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List >

                <Link to="/dashboard">
                    <p className='text-dark-dashboard text-dark text-center m-0'>Dashboard Home</p>
                </Link>

                <Link to="/home">
                    <p className='text-dark-dashboard text-dark text-center m-0'>Home</p>
                </Link>

                <Link to={`/dashboard/review`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Review</p>
                </Link>

                <Link to={`/dashboard/myOrders`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>My Orders</p>
                </Link>

                <Link to={`/dashboard/pay`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Pay</p>
                </Link>

                <Link to={`/dashboard/addProduct`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Add Product</p>
                </Link>

                <Link to={`/dashboard/makeAdmin`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Make Admin</p>
                </Link>

                <Link to={`/dashboard/manageProducts`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Manage Products</p>
                </Link>

                <Link to={`/dashboard/manageAllOrders`}>
                    <p className='text-dark-dashboard text-dark text-center m-0'>Manage All Orders</p>
                </Link>
                <div className='text-center mt-2'>
                <Button onClick={logOut}>Logout</Button>
                </div>
             
            </List>

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
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />

            </Box>
        </Box>
    );
}

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from '@mui/icons-material/Book';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

import { terminal } from "virtual:terminal";

function ButtonAppBar() {
  const navigate = useNavigate();
  const  { user, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // Display user information if logged in
  const showUser = (
    <div>
      {user ? (
        <>
          Welcome, {user.firstName} {user.lastName}!
        </>
      ) : (
        <>Welcome to our application!</>
      )}
    </div>
  );

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    terminal.log("Drawer toggled");
  };

  const handleBlogNavigate = () => {
    if (!user) {
    navigate("/signin");
    } else {
      navigate("/blog", { state: { user: user } });
    }
  }

  const handleSignInNavigate = () => {
    navigate("/signin");
  }

  const handleSignUpNavigate = () => {
    navigate("/signup");
  }

  const handleSignOutNavigate = () => {
    signOut();
    navigate("/");
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem key="Blog" disablePadding>
            <ListItemButton
            onClick={handleBlogNavigate}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#10375C" }}>
        <Toolbar>
          {/* Left most icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
          {/* Middle icon */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }} />
          {/* Profile icon menu for user sign in. Right most icon */}
          {user ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>{user.firstName} {user.lastName}</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider />
                <MenuItem onClick={handleSignOutNavigate}>Sign Out</MenuItem>
              </Menu>
            </div>
          ) : ( // User is not signed in
          <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>GUEST</MenuItem>
            <Divider />
            <MenuItem onClick={handleSignInNavigate}>Sign In</MenuItem>
            <MenuItem onClick={handleSignUpNavigate}>Register</MenuItem>
          </Menu>
        </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;

import React from 'react'
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import { Logout } from './Logout';

export const Navbar = () => {
  return (
    <>
        <AppBar>
            <Toolbar>
                <Typography variant="h4" sx ={{flexGrow:1}}> Weather App </Typography>
                <Button variant="contained" to="/login" component={Link}>Login</Button>
                <Button variant="contained" to="/signup" component={Link}>Signup</Button>
                <Logout/>
            </Toolbar>
        </AppBar>
    </>
  )
}

import React from 'react'
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import { Logout } from './Logout';

export const Navbar = () => {
        const button={marginLeft:"20px", fontSize:'1.2rem'}
  return (
    <>
        <AppBar>
            <Toolbar>
                <Typography variant="h4" sx ={{flexGrow:1}}> Weather App </Typography>
                <Button style={button} color="success" variant="contained" to="/login" component={Link}>Login</Button>
                <Button style={button} color="warning" variant="contained" to="/signup" component={Link}>Signup</Button>
                <Logout/>
            </Toolbar>
        </AppBar>
    </>
  )
}

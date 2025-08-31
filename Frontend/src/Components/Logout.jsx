import React from 'react'
import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();
    const btn={marginLeft:"20px", fontSize:'1.2rem'}
    const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Button onClick={handleLogout} style={btn} color="error"variant='contained'>Logout</Button>
  )
}

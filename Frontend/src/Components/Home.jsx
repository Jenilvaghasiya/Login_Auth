import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export const Home = () => {
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));
  if(!user.city){
    navigate("/login");
    return
  }
  const [weather, setWeather] = useState(null);

  const API_KEY = "4634072373054c4793255651253108"; 9

  useEffect(() => {
    if (!user || !user.city) {
      navigate("/login");
      return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${user.city}`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error fetching weather:", err));
  }, [user, navigate]);
  return (
    <>
    
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={4}
        style={{
          padding: "2rem",
          borderRadius: "1rem",
          width: "300px",
          textAlign: "center"
        }}
      >
        <Typography variant="h4" gutterBottom>
          {user.city}
        </Typography>

        {weather ? (
          <Typography variant="h6">
            🌡 Temperature: {weather.current.temp_c}°C
          </Typography>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Loading weather...
          </Typography>
        )}
      </Paper>
    </Grid>
    </>
  )
}
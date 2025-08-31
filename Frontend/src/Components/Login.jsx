import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const heading = { fontSize: "2.5rem", fontWeight: "700" };
  const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
  const row = { display: "flex", marginTop: "2rem" };
  const btnStyle = { marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", borderRadius: "0.5rem", backgroundColor: "blue" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password, city })
      .then(result => {
        if (result.data === "Success") {
          navigate("/home");
          localStorage.setItem("user", JSON.stringify({city}));
        } else {
          alert("Login Failed: User does not exist!");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Grid align="center">
      <Paper style={paperStyle} sx={{
        width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" },
        height: '60vh'
      }}>
        <Typography style={heading}>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            label="Enter Email"
            type="email"
            style={row}
            InputLabelProps={{ style: { fontWeight: "700", fontSize: "1.3rem" } }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Enter Password"
            type="password"
            style={row}
            InputLabelProps={{ style: { fontWeight: "700", fontSize: "1.3rem" } }}
          />
          <TextField
            onChange={(e) => setCity(e.target.value)}
            name="city"
            label="City"
            style={row}
            InputLabelProps={{ style: { fontWeight: "700", fontSize: "1.3rem" } }}
          />
          <Button type="submit" variant="contained" style={btnStyle}>Login</Button>
        </form>
      </Paper>
    </Grid>
  );
};

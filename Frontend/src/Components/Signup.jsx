import { Grid, Paper, TextField, Typography, Button, backdropClasses, colors } from '@mui/material';
import React from 'react'
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
    const heading={fontSize:"1.5rem",fontWeight:"700"};
    const paperStyle={padding:"2rem",margin:"100px auto",borderRadius:"1rem", boxShadow:"10px 10px 10px"}
    const row={display:"flex",marginTop:"2rem"}
    const btnStyle={marginTop:"2rem", fontsize:"1.2rem", fontWeight:"700", borderRadius:"0.5rem", backgroundColor:"blue"}

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [city, setCity] =useState("");
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/signup",{name, email, password})
        .then(result=>{
            if(result.status==201){
                console.log("User Created Successfully");
                navigate("/login");
            }
        })
        .catch(err => {
            if(err.response && err.response.status===400){
                window.alert("Email already exists. pls use other Email")
            }else{
               console.log(err); 
            }
        })
    }

    return (
    <>
        <Grid align="center">
            <Paper style={paperStyle} sx={{width:{
                xs:"80vw",
                sm:"50vw",
                md:"40vw",
                lg:"30vw",
                xl:"20vw"
            },
            height:'60vh'}}> 
            <Typography style={heading}>Signup</Typography>
            <form onSubmit={handleSubmit}>
                <TextField onChange={(e)=>setName(e.target.value)} name="name" sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="Enter Name" type="text"></TextField>
                <TextField onChange={(e)=>setEmail(e.target.value)} name="email" sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="Enter Email" type="email"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)} name="password" sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="Enter Password" type="password"></TextField>
                <TextField onChange={(e)=>setCity(e.target.value)} name="city" sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="City"></TextField>
                <Button  type="submit" variant='Contained' style={btnStyle}>SignUp</Button>
            </form>
            </Paper>
        </Grid>
    </> 
  )
}

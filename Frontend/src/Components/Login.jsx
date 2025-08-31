import React from 'react'
import { Grid, Paper, TextField, Typography, Button, backdropClasses, colors } from '@mui/material';

export const Login = () => {
   const heading={fontSize:"2.5rem",fontWeight:"700"};
    const paperStyle={padding:"2rem",margin:"100px auto",borderRadius:"1rem", boxShadow:"10px 10px 10px"}
    const row={display:"flex",marginTop:"2rem"}
    const btnStyle={marginTop:"2rem", fontsize:"1.2rem", fontWeight:"700", borderRadius:"0.5rem", backgroundColor:"blue"} 
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
            <Typography style={heading}>Login</Typography>
            <form>
                <TextField sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="Enter Email" type="email"></TextField>
                <TextField sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="Enter Password" type="password"></TextField>
                <TextField sx={{label: {fontWeight : "700", fontSize:"1.3rem"}}} style={row} label="City"></TextField>
                <Button  type="submit" variant='Contained' style={btnStyle}>Login</Button>
            </form>
            </Paper>
        </Grid>
    </> 
  )
}

import React from 'react'
import { Button } from '@mui/material'  

export const Logout = () => {
    const btn={marginLeft:"20px", fontSize:'1.2rem'}
  return (
    <Button style={btn} color="error"variant='contained'>Logout</Button>
  )
}

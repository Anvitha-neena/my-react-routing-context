import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, marginTop:10}}>

      <Typography variant='h4' component='h1' sx={{color:'#1976d2', fontWeight:'bold'}}>
        Login
        </Typography>

        <TextField label='Username' variant='outlined' sx={{width:'300px'}}/>
        <TextField label='Password' variant='outlined' type='password' sx={{width:'300px'}}/>

        <Button variant='contained' color='primary' sx={{backgroundColor:'#1976d2', '&:hover': {backgroundColor:'#1565c0', width:'fit-content'}}}>  
          Login
        </Button>  
        
    </Box>
  )
}

export default Login
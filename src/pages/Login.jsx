import { Box, Button, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import {useNavigate} from 'react-router'

const Login = () => {
  //sate variable for username and password
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  //handle change for username and password
  const handleChange=(e,type)=>{
    switch(type){
      case 'username':
        setUsername(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  // const handleChangeUser = (e) => {
  //   setUsername(e.target.value)
  // }

  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  const handleClick = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, marginTop:10}}>

      <Typography variant='h4' component='h1' sx={{color:'#1976d2', fontWeight:'bold'}}>
        Login
        </Typography>

        <TextField label='Username' variant='outlined' sx={{width:'300px'}} onChange={e=>handleChange(e,'username')}/>
        {/* {username} */}
        <TextField label='Password' variant='outlined' type='password' sx={{width:'300px'}} onChange={e=>handleChange(e,'password')}/>
        {/* {password} */}
        <Button variant='contained' color='primary' sx={{backgroundColor:'#1976d2', '&:hover': {backgroundColor:'#1565c0', width:'fit-content'}}} onClick={handleClick}>  
          Login
        </Button>  
        
    </Box>
  )
}

export default Login
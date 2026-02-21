import { Box, Button, TextField } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from "react-router";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const navigate = useNavigate();
  const handleChange=(e,type)=>{
    switch(type){
      case 'newPassword': 
        setNewPassword(e.target.value)
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleChangePassword = (e) => {
    e.preventDefault()  
    if(newPassword === confirmPassword){
      alert('Password changed successfully')
      navigate("/dashboard");
    }else{
      alert('Password does not match')
    }
  }
  return (
    <Box sx={{
        display:'flex', flexDirection:'column', gap:2, width:'300px', border:'1px solid black', padding:4,
        borderRadius:2,
        boxShadow:'0px 0px 10px rgba(0,0,0,0.1), 0px 0px 5px rgba(0,0,0,0.1)' 

    }}>
        <TextField variant='filled' label='Old Password'
        type='password' value={9999} disabled/>
        <TextField variant='standard' label='New Password'
        type='password' onChange={e=>handleChange(e,'newPassword')}/>
        <TextField variant='outlined' label='Retype Password'
        type='password' onChange={e=>handleChange(e,'confirmPassword')}/>

        <Button variant='contained' color='primary'
            sx={{marginTop:2, backgroundColor:'#1976d2', '&:hover': {backgroundColor:'#1565c0', width:'fit-content', alignSelf:'center'}}}
        onClick={handleChangePassword}>Change Password</Button>
        
    </Box>
  )
}

export default ChangePassword
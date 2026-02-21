import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const ChangePassword = () => {
  return (
    <Box sx={{
        display:'flex', flexDirection:'column', gap:2, width:'300px', border:'1px solid black', padding:4,
        borderRadius:2,
        boxShadow:'0px 0px 10px rgba(0,0,0,0.1), 0px 0px 5px rgba(0,0,0,0.1)' 

    }}>
        <TextField variant='filled' label='Old Password'
        type='password'/>
        <TextField variant='standard' label='New Password'
        type='password'/>
        <TextField variant='outlined' label='Retype Password'
        type='password'/>

        <Button variant='contained' color='primary'
            sx={{marginTop:2, backgroundColor:'#1976d2', '&:hover': {backgroundColor:'#1565c0', width:'fit-content', alignSelf:'center'}}}
        >Change Password</Button>
        
    </Box>
  )
}

export default ChangePassword
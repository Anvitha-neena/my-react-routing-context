import React from 'react'
import ChangePassword from '../components/ChangePassword'
import { Box } from '@mui/material'

const Profile = () => {
  return (
    <Box style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4, marginTop:10, width:'100%'}}>
        <h1>User Name</h1>
        <ChangePassword />
    </Box>
  )
}

export default Profile
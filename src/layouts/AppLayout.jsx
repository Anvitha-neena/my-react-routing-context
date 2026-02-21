import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'flex-end', 
        width: '100%',
        height: '60px',
        alignItems: 'center',
        position: 'fixed',
        top:0}}>
        <Navbar />
      </header>
      <section style={{
        width: '100vw',
        height: '100vh',
        paddingTop:'60px'
      }}>
      <Outlet />
      </section>
    </>
  );
}

export default AppLayout
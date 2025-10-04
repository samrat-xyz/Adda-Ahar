import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout

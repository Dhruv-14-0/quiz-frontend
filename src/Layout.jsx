import React from 'react'
import { Outlet } from 'react-router-dom'
import ThemeBtn from './Components/ThemeBtn'

function Layout() {
  return (
   <>
    <ThemeBtn/>
    <Outlet/>
   </>
  )
}

export default Layout
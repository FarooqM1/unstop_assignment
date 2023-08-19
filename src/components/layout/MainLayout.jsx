import React, { useState } from 'react'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
       <Header OpenSidebar={OpenSidebar}/>
       <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       <Outlet/>
    </>
  )
}

export default MainLayout
import React from 'react'
// components
import SideBar from '../Dashboard/SideBar'
import Topbar from '../Dashboard/Topbar'
import Menu from '../Dashboard/Menu'

const Layout = () => {
  return (
    <div className='flex w-full'>
      <SideBar/>
      <div className='bg-[#FCFBFC] w-full'>
        <Topbar/>
        <Menu/>
      </div>
    </div>
  )
}

export default Layout

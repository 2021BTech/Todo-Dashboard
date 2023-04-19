import React from 'react'
// components
import SideBar from '../Dashboard/SideBar'
import Topbar from '../Dashboard/Topbar'
import Main from '../Dashboard/Main'

const Layout = () => {
  return (
    <div className='flex w-full'>
      <SideBar/>
      <div className='bg-[#FCFBFC] w-full'>
        <Topbar/>
        <Main/>
      </div>
    </div>
  )
}

export default Layout

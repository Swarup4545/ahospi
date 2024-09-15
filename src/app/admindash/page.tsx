"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dashcontent from './Dashcontent'
const page = () => {
    const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  return (
    <>
    <div className='flex'>
        <Sidebar SelectdMenu={setSelectedMenu}/>
        <Dashcontent selectedmenu={selectedMenu}/>
    </div>
    </>
  )
}

export default page
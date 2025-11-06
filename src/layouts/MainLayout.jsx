import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer1.jsx'

const MainLayout = () => {
  return (
      <>
      <Outlet />
      <Footer />
      </>
  )
}

export default MainLayout
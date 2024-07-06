import { useState } from 'react'

import './App.css'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavBar from './components/main/NavBar'

function App() {

  return (
    <>
      <Toaster />
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

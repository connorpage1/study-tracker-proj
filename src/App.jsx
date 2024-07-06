import { useState } from 'react'

import './App.css'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import Table from './components/table/Table'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

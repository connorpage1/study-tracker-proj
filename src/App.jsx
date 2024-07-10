import './App.css'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './components/main/NavBar'
import { useState, useEffect } from 'react'


const url = 'http://localhost:8000/study-sessions'


function App() {

  const [sessions, setSessions] = useState([])

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(setSessions)
      .catch(err => handleError(err.message))
  }, [])



  return (
    <>
      
      <Header />
      <NavBar />
      <Outlet context={{sessions, url}}/>
      <Footer />
    </>
  )
}

export default App

import './App.css'
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './components/main/NavBar'
import { useState, useEffect } from 'react'


const url = 'http://localhost:8000/study-sessions'
const subjectUrl = 'http://localhost:8000/subjects'

function App() {

  const [sessions, setSessions] = useState([])
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(setSessions)
      .catch(err => handleError(err.message))
  }, [])



  useEffect(() => {
      fetch(subjectUrl)
      .then(res => res.json())
      .then(setSubjects)
      .catch(err => handleError(err.message))
  }, [])

    const addSession = (newSession) => {
      setSessions(current => [...current, newSession])
    }
    const removeSession = (sessionId) => {
        setSessions(current => current.filter(session => session.id !== sessionId))
    }

    const updateSession = (patchedSession) => {
        setSessions(current => current.map(session => session.id === patchedSession.id ? patchedSession : session))
    }

    const deleteSubject = (subjectId) => {
      setSubjects(current => current.filter(subject => subject.id !== subjectId))
    }

    const addSubject = (newSubject) => {
      setSubjects(current => [...current, newSubject])
    }

  return (
    <>
      
      <Header />
      <NavBar />
      <Outlet context={{sessions, url, subjects, subjectUrl, deleteSubject, addSession, removeSession, updateSession, deleteSubject, addSubject}}/>
      <Footer />
    </>
  )
}

export default App

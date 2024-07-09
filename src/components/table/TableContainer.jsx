import { useState, useEffect } from "react"
import { handleError } from "../error/errorFunctions"
import { Outlet } from "react-router-dom"

const url = 'http://localhost:8000/study-sessions'


const TableContainer = () => {
    const [sessions, setSessions] = useState([])
    const [editMode, setEditMode] =  useState(false);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setSessions)
        .catch(handleError)
    }, [])

    const addSession = (newSession) => {
        setSessions(current => [...current, newSession])
    }
    const removeSession = (sessionId) => {
        setSessions(current => current.filter(session => session.id !== sessionId))
    }

    const toggleEditMode = () => {
        setEditMode(current => !current)
    }
    return (
        <div id="table-container">
            <Outlet context={{ sessions, addSession, url, removeSession, editMode, toggleEditMode }}/>
        </div>
        
    )
}

export default TableContainer
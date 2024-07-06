import { useState, useEffect } from "react"
import { handleError } from "../error/errorFunctions"
import { Outlet } from "react-router-dom"

const url = 'http://localhost:8000/study-sessions'


const TableContainer = () => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setSessions)
        .catch(handleError)
    }, [])

    const addSession = (newSession) => {
        setSessions(current => [...current, newSession])
    }

    return (
        <div id="table-container">
            <Outlet context={{ sessions, addSession, url }}/>
        </div>
        
    )
}

export default TableContainer
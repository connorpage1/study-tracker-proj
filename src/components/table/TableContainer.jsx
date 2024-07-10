import { useState, useEffect } from "react"
import { handleError } from "../error/errorFunctions"
import { Outlet, useOutletContext } from "react-router-dom"


const TableContainer = () => {
    const { sessions, url } = useOutletContext();

    const addSession = (newSession) => {
        setSessions(current => [...current, newSession])
    }
    const removeSession = (sessionId) => {
        setSessions(current => current.filter(session => session.id !== sessionId))
    }

    const updateSession = (patchedSession) => {
        setSessions(current => current.map(session => session.id === patchedSession.id ? patchedSession : session))
    }
    return (
        <div id="table-container">
            <Outlet context={{ sessions, addSession, url, removeSession, updateSession }}/>
        </div>
        
    )
}

export default TableContainer
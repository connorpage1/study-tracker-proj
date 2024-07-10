import { useState, useEffect } from "react"
import { handleError } from "../error/errorFunctions"
import { Outlet, useOutletContext } from "react-router-dom"


const TableContainer = () => {
    const { sessions, url, addSession, removeSession, updateSession, subjects} = useOutletContext();

    return (
        <div id="table-container">
            <Outlet context={{ sessions, addSession, url, removeSession, updateSession, subjects}}/>
        </div>
        
    )
}

export default TableContainer
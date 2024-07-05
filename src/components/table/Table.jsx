import { useState, useEffect } from "react"
import TableRow from "./TableRow"

const url = 'http://localhost:8000/study-sessions'

const Table = () => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setSessions)
        .catch(console.log)
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Subject</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {sessions.map(session => <TableRow key={session.id} {...session}/>)}
            </tbody>
        </table>
    )
}

export default Table
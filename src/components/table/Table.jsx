
import TableRow from "./TableRow"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"




const Table = () => {
    const {sessions} = useOutletContext();
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    
    const filteredSessions = sessions.filter(session => searchQuery === '' || session.subject.toLowerCase().includes(searchQuery.toLowerCase()) ? session : null)

    return (
        <> 
            <input id="search" name="search" value={searchQuery} onChange={handleChange}></input>
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
                    {filteredSessions.map(session => <TableRow key={session.id} {...session}/>)}
                </tbody>
            </table>
        </>

    )
}

export default Table
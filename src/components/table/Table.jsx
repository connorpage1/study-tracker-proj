
import TableRow from "./TableRow"
import { useOutletContext } from "react-router-dom"



const Table = () => {
    const {sessions} = useOutletContext();
    
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
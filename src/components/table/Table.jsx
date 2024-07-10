
import SubjectChart from "../charts/SubjectChart";
import SubjectForm from "../form/SubjectForm";
import TableRow from "./TableRow"
import { useOutletContext } from "react-router-dom"



const Table = () => {
    const {sessions} = useOutletContext();

    // Sort a copy of the list to avoid modifying the original data
    const sortedSessions = [...sessions].sort((a, b) => b.date.localeCompare(a.date))
    return (
       <div className='table'> 
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Subject</th>
                    <th>Location</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {sortedSessions.map(session => <TableRow key={session.id} {...session}/>)}
            </tbody>
        </table>
        <SubjectForm />
       </div>

    )
}

export default Table
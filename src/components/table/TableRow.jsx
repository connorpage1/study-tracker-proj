import { useNavigate } from "react-router-dom"

const TableRow = ({ date, start, duration, subject, location, id }) => {
    const navigate = useNavigate();
    
    return (
        <tr>
            <td>{date}</td>
            <td>{start}</td>
            <td>{duration}</td>
            <td className={subject}>{subject}</td>
            <td>{location}</td>
            <td><button onClick={() => navigate(`/sessions/${id}`)}>See more</button></td>
        </tr>
    )
}
export default TableRow
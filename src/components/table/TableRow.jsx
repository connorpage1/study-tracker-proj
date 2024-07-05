const TableRow = ({ date, start, duration, subject, location }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{start}</td>
            <td>{duration}</td>
            <td className={subject}>{subject}</td>
            <td>{location}</td>
            <td><button>See more</button></td>
        </tr>
    )
}
export default TableRow
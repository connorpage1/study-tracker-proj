import { useNavigate } from "react-router-dom"
import dateFormat from "dateformat";
import { ButtonContent, Button, Icon  } from "semantic-ui-react";

const TableRow = ({ date, start, duration, subject, location, id }) => {
    const navigate = useNavigate();
    
    return (
        <tr>
            <td>{dateFormat(date, "m/d/yy", true)}</td>
            <td>{start}</td>
            <td>{duration >= 60 ? `${Math.floor(duration/60)} h ${duration%60}` : duration} m</td>
            <td className={subject}>{subject}</td>
            <td>{location}</td>
            <td><Button animated onClick={() => navigate(`/sessions/${id}`)}>
                    <ButtonContent visible>See more</ButtonContent>
                    <ButtonContent hidden>
                         <Icon name='arrow right' />
                     </ButtonContent>
                </Button></td>
        </tr>
    )
}
export default TableRow
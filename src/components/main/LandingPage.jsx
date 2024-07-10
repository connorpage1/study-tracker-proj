import TimeBySubject from "../charts/TimeBySubject"
import SubjectForm from "../form/SubjectForm"

const LandingPage = () => {
    return (
        <div>
            <h3>Welcome to Study Tracker</h3>
            <p>Study Tracker is a simple React application designed to allow you to keep track of your study sessions. To view your sessions as a table, click on "View Sessions." On the sessions table, click the "show more" button to see additional information about the study session. To log a new study session, click "create new session," which will take you to a form to create a new study session.</p>
            <p>To see the study data displayed in graph form, click "view graphs"</p>
            <br/>
            <button>Get started</button>
            <TimeBySubject />
        </div>
 
    )
}

export default LandingPage
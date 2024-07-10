import Statistics from "../charts/Statistics"


const LandingPage = () => {
    return (
        <div>
            <h3>Welcome to Study Tracker</h3>
            <p>Study Tracker is a simple React application designed to allow you to keep track of your study sessions. To view your sessions as a table, click on "View Sessions." On the sessions table, click the "show more" button to see additional information about the study session. To log a new study session, click "create new session," which will take you to a form to create a new study session.</p>

            <p>In addition to letting you log your study sessions, Study Tracker is built to help you visualize your study data. Below is a quick at-a-glance breakdown of all the study sessions logged in Study Tracker. To a collection of graphs, click "view graphs"</p>
            <br/>
            <h3>At a Glance:</h3>
            <Statistics />
        </div>
 
    )
}

export default LandingPage
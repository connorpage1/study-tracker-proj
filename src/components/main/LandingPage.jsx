import Statistics from "../charts/Statistics"


const LandingPage = () => {
    return (
        <div>
            <h2>Welcome to Study Tracker</h2>
            <p>Study Tracker is a simple React application designed to allow you to keep track of your study sessions. To view your sessions as a table, click on "View Sessions." On the sessions table, click the "show more" button to see additional information about the study session. In the expanded view of each study session, you can edit or delete the session. To log a new study session, click "create new session," which will take you to a form to create a new study session.</p>
            <p>Additionally, you can adapt Study Tracker to your needs by adding or removing subjects from the Study Tracker form. By default, Study Tracker lets you log Russian, coding, typing, and cybersecurity study sessions. To change the subjects on your form, click on "Customize Subjects." You can add more than one subject at once by clicking the "Add Another Subject" button. Add the subjects to the form with the "Create Subjects" button.</p>
            <p>In addition to letting you log your study sessions, Study Tracker is built to help you visualize your study data. Below is a quick at-a-glance breakdown of all the study sessions logged in Study Tracker. To view a collection of graphs, click "view graphs"</p>
            <br/>
            <h3>At a Glance:</h3>
            <Statistics />
        </div>
 
    )
}

export default LandingPage
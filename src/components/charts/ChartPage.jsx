import FocusChart from "./FocusChart"
import SubjectChart from "./SubjectChart"
import TimeBySubject from "./TimeBySubject"

const ChartPage = ()=> {
    return (
        <div id='chart-container'>
            <h2 className='section-title'>Graphs</h2>
            <SubjectChart />
            <TimeBySubject />
            <FocusChart />
        </div>
    )
}

export default ChartPage
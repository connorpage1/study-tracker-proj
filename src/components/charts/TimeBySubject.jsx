import { useOutletContext } from "react-router-dom"
import CanvasJSReact from '@canvasjs/react-charts';

const TimeBySubject = () => {
    const { sessions } = useOutletContext();


    const dataList = []

    const subjectsObj = {}

    sessions.forEach(session => {
        if (!(Object.keys(subjectsObj).includes(session.subject))) {
            subjectsObj[session.subject] = session.duration
        }
        else {
            subjectsObj[session.subject] += session.duration
        }
    })

    console.log(subjectsObj)


    return (
        <div>

        </div>
    )
}

export default TimeBySubject
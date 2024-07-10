import { useOutletContext } from "react-router-dom"
import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

    const keyList = Object.keys(subjectsObj)

    for (const key of keyList ){
        const obj = {
            label: key,
            y: Math.round((subjectsObj[key]/60)*10)/10
        }
        dataList.push(obj)
    }
    
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title:{
            text: "Study Time by Subject"
        },
        axisX: {
            title: "Subject",
            reversed: true,
        },
        axisY: {
            title: "Hours",
            includeZero: true,
            //labelFormatter: this.addSymbols
        },
        data: [{
            type: "bar",
            dataPoints: dataList,
            toolTipContent: "{label}: {y} hours",

            
        }]
    }

    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default TimeBySubject
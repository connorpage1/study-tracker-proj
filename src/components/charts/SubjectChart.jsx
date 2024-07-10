import { useOutletContext } from "react-router-dom";
import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SubjectChart = () => {
    const { sessions } = useOutletContext();
    const subjectObj = {}

    sessions.forEach(session => {
        const keysList = Object.keys(subjectObj)
        if (!(keysList.includes(session.subject))) {
            subjectObj[session.subject] = {count: 1}
        }
        else {
            subjectObj[session.subject].count += 1
        }
    })
    
    console.log(subjectObj)

    const dataPoints = []
    Object.keys(subjectObj).forEach(key => {
        dataPoints.push({label: key, y: subjectObj[key].count})
    })

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Subjects Studied"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: dataPoints
			}]
		}
		
    

    console.log(dataPoints)
    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default SubjectChart
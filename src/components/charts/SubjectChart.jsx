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
    
    let sum = 0
    
    Object.keys(subjectObj).forEach(key => sum += subjectObj[key].count)

    const dataList = []
    Object.keys(subjectObj).forEach(key => {
        dataList.push({label: key, y: subjectObj[key].count, z: Math.floor(subjectObj[key].count/sum*100)})
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
				indexLabel: "{label}: {y}",	
                toolTipContent: "{label}: <strong>{z}%</strong>",	
				startAngle: -90,
				dataPoints: dataList
			}]
		}
		
    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default SubjectChart
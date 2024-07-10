import { useOutletContext } from "react-router-dom";
import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SubjectChart = () => {
    const { sessions } = useOutletContext();
    
    const subjectObj = {}

    sessions.forEach(session => {
        const keysList = Object.keys(subjectObj)
        // If the subject is not a key in the obj, add it with a count of 1
        if (!(keysList.includes(session.subject))) {
            subjectObj[session.subject] = {count: 1}
        }
        // else increment the count by 1
        else {
            subjectObj[session.subject].count += 1
        }
    })
    

    //Declare sum for calculating percentage for tooltip
    let sum = 0
    Object.keys(subjectObj).forEach(key => sum += subjectObj[key].count)


    //Data list for pie chart
    const dataList = []
    Object.keys(subjectObj).forEach(key => {
        dataList.push({label: key, y: subjectObj[key].count, z: Math.floor(subjectObj[key].count/sum*100)})
    })
        /* From canvas.js, see documentation: https://canvasjs.com/react-charts/pie-chart/ */
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Number of Sessions by Subject"
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
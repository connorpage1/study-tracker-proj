import { useOutletContext } from "react-router-dom"
import CanvasJSReact from '@canvasjs/react-charts';
import dateFormat from "dateformat";

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;


const FocusChart = () => {
    const { sessions } = useOutletContext();
    
    const dataList = [];

    sessions.forEach(session => dataList.push({x: new Date(session.date), y: session.focus}))

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Focus Level Over Time"
        },
        axisY: {
            title: "Focus Level",
            maximum: 10,
           
        },
        axisX: {
            title: "Date",
        
    
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "{x}: Focus {y}/10",
            dataPoints: dataList
        }]
    }




    return(
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )

}

export default FocusChart
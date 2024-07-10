import { useOutletContext } from "react-router-dom"
import { StatisticGroup } from "semantic-ui-react";

const Statistics = () => {
    const { sessions } = useOutletContext();

    let minuteCount = 0;
    const subjectList = []

    let focusCount = 0;

    for (const session of sessions) {
        minuteCount += session.duration
        focusCount += session.focus
        if (!subjectList.includes(session.subject)) {
            subjectList.push(session.subject)
        }
    }



    const avgFocus = Math.round((focusCount/sessions.length)*10)/10

    const hours = Math.round((minuteCount/60)*10)/10

    const items = [
        {key: 'subjects', label: 'Subjects Studied', value: subjectList.length},
        {key: 'minutes', label: 'Minutes Spent Studying', value: minuteCount},
        {key: 'hours', label: 'Hours', value: hours},
        {key: 'focus', label: 'Average Focus Level', value: `${avgFocus}/10`},
    ]
    
    return (
        <div>
            <StatisticGroup items={items} />
        </div>
    )
}

export default Statistics
import { useOutletContext } from "react-router-dom";



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

    const counts = {}
    Object.keys(subjectObj).forEach(key => {
        counts[key] = subjectObj[key].count
    })
    
    
    console.log(counts)
    return (
        <div>

        </div>
    )
}

export default SubjectChart
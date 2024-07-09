import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { handleError } from "../error/errorFunctions";
import dateFormat from "dateformat";
import toast from "react-hot-toast";

const ExpandedView = () => {
    const { url } = useOutletContext();
    const params = useParams();
    const [detailSession, setDetailSession] = useState(null);


    // Fetch the project using the url and id from params
    useEffect(() => {
        fetch(`${url}/${params.id}`)
        .then(res => res.json())
        .then(setDetailSession)
        .catch(handleError)

    }, [params.id])
    // If there is not yet a detail session because of asynchronous fetch, display a loading screen
    if (!detailSession){
        return (
            <h4>Loading...</h4>
        )
    }
    else {
        return (
            <div id="session-details">
                <h2>Session Details:</h2>
                <p><strong>Date: </strong>{dateFormat(detailSession.date,'dddd, mmmm dS, yyyy')}</p>
                <p><strong>Start Time:</strong> {detailSession.start}</p>
                <p><strong>Duration: </strong>{detailSession.duration}</p>
                <p><strong>Location:</strong> {detailSession.location}</p>
                <p><strong>Subject:</strong> {detailSession.subject}</p>
                <p><strong>Description:</strong> {detailSession.description} </p>
                <p><strong>Focus Level: </strong> {detailSession.focus}/10</p>
                <p><strong>Phone Bricked?:</strong> {detailSession.bricked ? "Yes":"No"} </p>
                <button id='edit-button'>Edit</button>
                <button id='delete-button'>Delete</button>

            </div>
        
    )
}
}

export default ExpandedView;
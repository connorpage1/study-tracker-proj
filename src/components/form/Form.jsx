import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import { fetchPostSession } from "../apis/fetchFunctions";

    // Sets initial state to empty strings—set up outside Form function
    const initialState = {
        date: "",
        start: "",
        duration: "", 
        location: "",
        subject: "",
        description: "",
        focus: "",
        bricked: ""
    }
    

const Form = () => {
    
    const navigate = useNavigate();


    // Bring in addSession and url from outlet context
    const { addSession, url } = useOutletContext();

    const [formData, setFormData] = useState(initialState)

    // Change state when form changes
    const handleChange = (e) => {
        //Destructure e.target
        const {name, value} = e.target

        // Make sure the values are in the correct form before they are added to the JSON file so that values can be used for calculations
        if (name === 'duration' || name ==='focus') {
            setFormData({...formData, [name]: Number(value)})
        }
        else if (name === 'bricked') {
            setFormData({...formData, [name]: Boolean(value)})
        }
        else {
            setFormData({...formData, [name]: value})
        }
        
    }
    
    const handleSubmit = (e) => {
        // Prevent page refresh
        e.preventDefault()
        fetchPostSession(url, formData, addSession, navigate)
    }


    return (
        <div id="form-container">
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="date">Date: </label><br/>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} /><br/>
                
                <label htmlFor="start">Start Time: </label><br/>
                <input type="time" id="start" name="start" value={formData.start} onChange={handleChange} /><br/>
               
                <label htmlFor="duration">Duration (minutes): </label><br/>
                <input type="number" id="duration" name="duration" step="1" value={formData.duration} onChange={handleChange} /><br/>
               
                <label htmlFor="location">Location: </label><br/>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} /><br/>
               
                <label htmlFor="subject">Subject: </label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} >
                    <option value=''>Select One</option>
                    <option value='Russian'>Russian</option>
                    <option value='cybersecurity'>cybersecurity</option>
                    <option value='coding'>coding</option>
                    <option value='typing'>typing</option>
                </select><br/>
                
                <label htmlFor="description">Description: </label><br/>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="7" cols='50'/><br/>
                
                <label htmlFor="focus">Focus Level: </label>
                <select id="focus" name="focus" value={formData.focus} onChange={handleChange} >
                    <option value=''>Select One</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select><br/>

                <label htmlFor="bricked">Phone Bricked? </label>
                <select id="bricked" name="bricked" value={formData.bricked} onChange={handleChange} >
                    <option value=''>Select One</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>

                </select><br/>
                <br />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form
import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import { fetchPostSession } from "../apis/fetchFunctions";
import toast from "react-hot-toast";
import * as yup from 'yup'
import { handleError } from "../error/errorFunctions";

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
    

    const schema = yup.object().shape({
        date: yup.date("Please enter the date in the proper format").required("Date is required"),
        start: yup.string().required("Please enter a start time"),
        duration: yup.number().required("Please enter a duration").positive("Duration must be greater than zero").integer("Duration must be an integer"),
        location: yup.string().required("Please enter a location"),
        subject: yup.string().required("Please select a subject"),
        description: yup.string().required("Please enter a description"),
        focus: yup.number().required("Please select a focus level").positive('Focus level must be positive').integer().min(0).max(10),
        bricked: yup.boolean("Please select whether phone was bricked").required("Please select whether phone was bricked")

    })

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
            const formValue = (value === "true" ? true : (!value ? '' : false))
            setFormData({...formData, [name]: formValue})
        }
        else {
            setFormData({...formData, [name]: value})
        }
        
    }
    

    const handleSubmit = (e) => {
        // Prevent page refresh
        e.preventDefault()
        schema.validate(formData)
        .then(validatedData => fetchPostSession(url, validatedData, addSession, navigate))
        .catch(err => {
            const error = JSON.stringify(err)
            console.log(error)
            handleError('Please fill out all form fields correctly')
        })
    
    }


    return (
        <div id="form-container">
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h2>Log a new study session</h2>
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


                {/* TODO Figure out why this is behaving weirdly. "Yes" works, but "no" goes to "yes" and "select one" goes to "no." Briefly worked and then broke again. */}
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
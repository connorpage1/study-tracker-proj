import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import { fetchPostSession } from "../apis/fetchFunctions";
import toast from "react-hot-toast";
import * as yup from 'yup'
import { handleError } from "../error/errorFunctions";
import { Formik } from "formik";
import { Label } from "semantic-ui-react";

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
        date: yup.date("Please enter the date in the proper format").required("Please enter a date"),
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

    const handleFormSubmit = (formData) => {
        fetchPostSession(url, formData, addSession, navigate)
        .catch(err => {
            debugger
            const error = JSON.stringify(err)
            console.log(error)
            handleError('Please fill out all form fields correctly')
        })
    
    }


    return (
        <div id="form-container">
            <Formik 
            initialValues={initialState}
            validationSchema={schema}
            onSubmit={handleFormSubmit}
            >
                { ({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Log a new study session</h2>
                    <label htmlFor="date">Date: </label><br/>
                    <input type="date" id="date" name="date" value={values.date} onChange={handleChange} onBlur={handleBlur}/><br/>
                    {touched.date && errors.date && <div className='error'><Label pointing>{errors.date}</Label></div>}
                    <br/>

                    <label htmlFor="start">Start Time: </label><br/>
                    <input type="time" id="start" name="start" value={values.start} onChange={handleChange} onBlur={handleBlur} /><br/>
                    {touched.start && errors.start && <div className='error'><Label pointing>{errors.start}</Label></div>}
                    <br />

                    <label htmlFor="duration">Duration (minutes): </label><br/>
                    <input type="number" id="duration" name="duration" step="1" value={values.duration} onChange={handleChange} onBlur={handleBlur} /><br/>
                    {touched.duration && errors.duration && <div className='error'> <Label pointing>{errors.duration}</Label></div>}
                    <br/>

                    <label htmlFor="location">Location: </label><br/>
                    <input type="text" id="location" name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} /><br/>
                    {touched.location && errors.location && <div className='error'><Label pointing>{errors.location}</Label></div>}
                    <br/>


                    <label htmlFor="subject">Subject: </label>
                    <select id="subject" name="subject" value={values.subject} onChange={handleChange} onBlur={handleBlur} >
                        <option value=''>Select One</option>
                        <option value='Russian'>Russian</option>
                        <option value='cybersecurity'>cybersecurity</option>
                        <option value='coding'>coding</option>
                        <option value='typing'>typing</option>
                    </select><br/>
                    {touched.subject && errors.subject && <div className='error'><Label pointing>{errors.subject}</Label></div>}
                    <br/>

                    
                    <label htmlFor="description">Description: </label><br/>
                    <textarea id="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} rows="7" cols='50'/><br/>
                    {touched.description && errors.description && <div className='error'><Label pointing>{errors.description}</Label></div>}
                    <br/>


                    <label htmlFor="focus">Focus Level: </label>
                    <select id="focus" name="focus" value={values.focus} onChange={handleChange}onBlur={handleBlur}  >
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
                    {touched.focus && errors.focus && <div className='error'><Label pointing>{errors.focus}</Label></div>}
                    <br/>


                    <label htmlFor="bricked">Phone Bricked? </label>
                    <select id="bricked" name="bricked" value={values.bricked} onChange={handleChange}onBlur={handleBlur}  >
                        <option value=''>Select One</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>

                    </select><br/>
                    {touched.bricked && errors.bricked && <div className='error'><Label pointing>{errors.bricked}</Label></div>}
                    <br/>

                    <br />
                <button type="submit">Submit</button>
                </form>
                )}
            </Formik>
            
        </div>
    )
}
export default Form
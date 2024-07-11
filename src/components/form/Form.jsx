import { useEffect, useState } from "react"
import { useOutletContext, useNavigate, useParams } from "react-router-dom"
import { fetchPostSession, fetchPatchSession } from "../apis/fetchFunctions";
import * as yup from 'yup'
import { handleError } from "../error/errorFunctions";
import { useFormik } from "formik";
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
    const { id } = useParams();
    
    const navigate = useNavigate();
    const [formData, setFormData ] = useState(null)
    
    // Bring in addSession and url from outlet context
    const { addSession, url, updateSession, subjects } = useOutletContext();
    
    const handleFormSubmit = (formikData) => {
        id ? fetchPatchSession(formikData, url, id, updateSession, navigate) : fetchPostSession(url, formikData, addSession, navigate)    
    }
    
    const formik = useFormik({
        initialValues: (id && formData) ? formData : initialState,
        validationSchema: schema,
        onSubmit: handleFormSubmit 
        });

    useEffect(()=> {
        if (id) {
            fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData(data)
                formik.setValues(data)
            })
            .catch(handleError)
        }
        else {
            formik.resetForm()
        }
    }, [id])

    const options = subjects.map(subject => <option key={subject.id} value={subject.name}>{subject.name}</option>)

    if (id && !formData) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="form-container">
         
                <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
                    {id ? <h2>Update Session</h2> : <h2>Log a New Study Session</h2>}
                    <label className='form-label' htmlFor="date">Date: </label><br/>
                    <input className='form-input' type="date" id="date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/>
                    {formik.touched.date && formik.errors.date && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.date}</Label></div>}
                    <br/>

                    <label className='form-label' htmlFor="start">Start Time: </label><br/>
                    <input className='form-input' type="time" id="start" name="start" value={formik.values.start} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
                    {formik.touched.start && formik.errors.start && <div className='error'><Label color='red basic' pointing>{formik.errors.start}</Label></div>}
                    <br />

                    <label className='form-label' htmlFor="duration">Duration (minutes): </label><br/>
                    <input className='form-input' type="number" id="duration" name="duration" step="1" value={formik.values.duration} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
                    {formik.touched.duration && formik.errors.duration && <div className='error'> <Label color='red basic' className='form-label' pointing>{formik.errors.duration}</Label></div>}
                    <br/>

                    <label className='form-label' htmlFor="location">Location: </label><br/>
                    <input className='form-input' type="text" id="location" name="location" value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
                    {formik.touched.location && formik.errors.location && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.location}</Label></div>}
                    <br/>


                    <label className='form-label' htmlFor="subject">Subject: </label>
                    <select className='form-select' id="subject" name="subject" value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} >
                        <option value=''>Select One</option>
                        {options}
                    </select><br/>
                    {formik.touched.subject && formik.errors.subject && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.subject}</Label></div>}
                    <br/>

                    
                    <label className='form-label' htmlFor="description">Description: </label><br/>
                    <textarea className='form-input' id="description" name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} rows="7" cols='50'/><br/>
                    {formik.touched.description && formik.errors.description && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.description}</Label></div>}
                    <br/>


                    <label className='form-label' htmlFor="focus">Focus Level: </label>
                    <select className='form-select' id="focus" name="focus" value={formik.values.focus} onChange={formik.handleChange}onBlur={formik.handleBlur}  >
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
                    {formik.touched.focus && formik.errors.focus && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.focus}</Label></div>}
                    <br/>


                    <label className='form-label' htmlFor="bricked">Phone Bricked? </label>
                    <select className='form-select' id="bricked" name="bricked" value={formik.values.bricked} onChange={formik.handleChange}onBlur={formik.handleBlur}  >
                        <option value=''>Select One</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>

                    </select><br/>
                    {formik.touched.bricked && formik.errors.bricked && <div className='error'><Label color='red basic' className='form-label' pointing>{formik.errors.bricked}</Label></div>}
                    <br/>

                    <br />
                <button type="submit">{id ? 'Update' : 'Submit'}</button>
                </form>
        </div>
    )
}
export default Form
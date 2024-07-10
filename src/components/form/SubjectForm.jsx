import { useOutletContext, useNavigate } from "react-router-dom"
import { fetchPostSession } from "../apis/fetchFunctions";
import * as yup from 'yup'
import { Formik, Field, Form, ErrorMessage, FieldArray} from "formik";
import { Label } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { handleError } from "../error/errorFunctions";

const subjectUrl = 'http://localhost:8000/subjects'

const SubjectForm = () => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch(subjectUrl)
        .then(res => res.json())
        .then(setSubjects)
        .catch(err => handleError(err.message))
    }, [])

    const formSubjects = []
    subjects.forEach(subject => formSubjects.push(subject.name))

    const initialValues = {
        subjects: [
            {
                name: '',
            }
        ]
    }

    const handleFormSubmit = (formData, { resetForm }) => {
        const subjectArray = formData.subjects

        subjectArray.forEach(subjectObj => {
            fetch(subjectUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(subjectObj)
            })
            .then(res => res.json())
            .then(newSubject => setSubjects(current => [...current, newSubject]))
            .then(resetForm())
            .catch(console.log)
            })
    }

    const handleDeleteSubject = (subjectId) => {
        fetch(`${subjectUrl}/${subjectId}`, {
            method: "DELETE"
        })
        .then(() => setSubjects(current => current.filter(subject => subject.id !== subjectId)))
        .catch(console.log)
    }

    const currentSubjects = (
        subjects.map(subject => <li key={subject.id}>{subject.name}<button onClick={() => handleDeleteSubject(subject.id)}>🗑</button></li>)
    )

    return (
        <div className='form-container'>
            <h1>Change Subjects</h1>
            <h4>Current Subjects</h4>
            <ul>
                {currentSubjects}
            </ul>

            <h4>Add More: </h4>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                >
                    {({ values }) => (
                        <Form>
                            <FieldArray name='subjects'>
                                {({ insert, remove, push }) => (
                                    <div>
                                        {values.subjects.length > 0 && 
                                        values.subjects.map((subject, index)=> (
                                            <div className='row' key={index}>
                                                <div className='col'>
                                                    <label htmlFor={`subjects.${index}.name`}>Name: </label>
                                                    <Field 
                                                        name={`subjects.${index}.name`}
                                                        placeholder="Subject"
                                                        type="text"
                                                        />
                                                    <ErrorMessage 
                                                        name={`subjects.${index}.name`}
                                                        component="div"
                                                        className="field-error"
                                                        />
                                                </div>
                                                <div className="col"> 
                                                    <button
                                                        type="button"
                                                        className="secondary"
                                                        onClick={() => remove(index)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div>
                                           
                                        ) ) }
                                        <button
                                            type="button"
                                            className="secondary"
                                            onClick={()=> push({name: ''})}
                                            >
                                            Add Another Subject
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                            <button type="submit">Add Subject(s) to Form</button>
                        </Form>
                    )}
                </Formik>
        </div>
    );
}
export default SubjectForm
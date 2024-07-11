import { useOutletContext, useNavigate } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage, FieldArray} from "formik";
import { Icon } from "semantic-ui-react";
import { handleError } from "../error/errorFunctions";


const SubjectForm = () => {

    const { subjects, subjectUrl, deleteSubject, addSubject } = useOutletContext();

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
            .then(newSubject => addSubject(newSubject))
            .then(resetForm())
            .catch(err => handleError(err.message))
            })
    }

    const handleDeleteSubject = (subjectId) => {
        fetch(`${subjectUrl}/${subjectId}`, {
            method: "DELETE"
        })
        .then(() => deleteSubject(subjectId) )
        .catch(err => handleError(err.message))
    }

    const currentSubjects = (
        subjects.map(subject => <li key={subject.id}>{subject.name}<Icon onClick={() => handleDeleteSubject(subject.id)} name='trash'/></li>)
    )

    return (
        <div className='form-container'>
            <h2>Change Subjects</h2>
            <p>To customize your experience on Study Tracker, you can add or remove subjects. To remove a subject from the form, simply click the trash icon next to its name. To add subjects, type the name of the subject you want to add into the input box. If you'd like to add multiple subjects at once, click the "Add Another Subject" button and then click "Create Subject(s)" when you're ready to add your subjects to the form!</p>
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
                        <Form className="form">
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
                                                        className='form-input'
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
                            <button type="submit">Create Subject(s)</button>
                        </Form>
                    )}
                </Formik>
        </div>
    );
}
export default SubjectForm
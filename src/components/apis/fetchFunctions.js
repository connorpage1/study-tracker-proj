import toast from "react-hot-toast"
import { handleError } from "../error/errorFunctions"

export const fetchPostSession = (url, validatedData, addSession, navigate) => {
    const formattedValidData = {...validatedData, focus: Number(validatedData.focus), bricked: (validatedData.bricked === 'false' ? false : true)}
    const fetchPromise = fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formattedValidData)
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        else {
            throw new Error(res.statusText)
        }
    })
    .then(session => {
        addSession(session)
        navigate('/sessions')
    })
    .catch(err => {
        throw err})

    toast.promise(
        fetchPromise,
        {
            loading: 'Creating study session...',
            success: 'Study session created successfully!',
            error: `Failed to create study session.`
        }
    );
}

export const fetchDeleteSession = (url, id, deleteFn, navigate) => {
    const fetchDeletePromise = fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    .then(() => deleteFn(id))
    .then(() => navigate('/sessions'))
    .catch(err => {
        throw err})

    toast.promise(
        fetchDeletePromise,
            {
                loading: 'Deleting session...',
                success: 'Study session deleted!',
                error: `Failed to delete study session.`
            }
        )
}

export const fetchPatchSession = (validatedData, url, id, updateFn, navigate) => {
    const formattedValidData = {...validatedData, focus: Number(validatedData.focus), bricked: (validatedData.bricked === 'false' ? false : true)}
    const fetchPatchPromise = fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formattedValidData)
    })
    .then(res => res.json())
    .then((patchedSession) => updateFn(patchedSession))
    .then(()=> navigate(`/sessions/${id}`))
    .catch(err => {throw err})


    toast.promise(
        fetchPatchPromise, 
        {
            loading: 'Updating session...',
            success: 'Study session updated!',
            error: `Failed to update study session.`
        }
    )
}
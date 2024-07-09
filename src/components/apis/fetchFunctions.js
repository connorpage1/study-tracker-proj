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
        //toast.success("Study session created")
        navigate('/sessions')
    })
    .catch(err => {
        //handleError(`Failed to create study session. \n${err.message || err}`)
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
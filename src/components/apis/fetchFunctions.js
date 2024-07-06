import { handleError } from "../error/errorFunctions"

export const fetchPostSession = (url, validatedData,addSession) => {
    fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedData)
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
    })
    .catch(err => handleError`Could not add study session: \n${err.message || err}`)
}
import { toast } from "react-hot-toast"

export const handleError = (errorText) => {
    toast.error(errorText)
}
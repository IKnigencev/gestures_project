import { ChangeEvent, useState } from 'react'

export const useForm = <T extends object>(inputValues: T, callBack?: () => void) => {
    const [values, setValues] = useState<T>(inputValues)
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if(callBack)
            callBack()
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }
    return { values, handleChange, setValues }
}
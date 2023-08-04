import React, {useState} from "react";

const useFields= (initialState) => {
    const [A, B] = useState(initialState);

    const handleChange = e => {
        B(A => ({
        ...A,
        [e.target.name]: e.target.value
    }))
}
    const resetFormData = () => {
        B(initialState)
    }
    return[A, handleChange, resetFormData];
}

export default useFields;
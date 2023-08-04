import React from "react";
import useFields from "./userFields";

const SignUpForm = () => {
    const[A, handleChange,resetFormData] = useFields({
        adjetive:"",
        verb: "", 
        noun: ""
    })
    const handleSubmit = e => {
        e.preventDefault();
        alert( `Today is a ${A.adjetive} day, and Sally decided to ${A.verb} over a ${A.noun}`)
        resetFormData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="adjetive" 
            value={A.adjetive}
            onChange={handleChange}
            placeholder="Adjetive"
            />
            <input
            type="text"
            name="verb" 
            value={A.verb}
            onChange={handleChange}
            placeholder="verb"
            />
            <input
            type="text"
            name="noun" 
            value={A.noun}
            onChange={handleChange}
            placeholder="noun"
            />
        <button>Submit</button>
        </form>
    )
}

export default SignUpForm;
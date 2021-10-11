import React, {useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
const CreateCategory = () => {
    const [title,setTitle] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = { title};

        // להשתמש במשיכת מידע ולעשות פוסט על פורום

    }
    return (
        <div>
            <h1>Create Category</h1>

            <forn onSubmit={handleOnSubmit}>
                
            </forn>
        </div>
    )
}

export default CreateCategory

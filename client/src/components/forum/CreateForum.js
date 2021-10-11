import React, {useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
const CreateForum = () => {
    const [title,setTitle] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = { title};

        // להשתמש במשיכת מידע ולעשות פוסט על קטגוריה
    }
    return (
        <div>
            <h1>Create Forum</h1>

            <forn onSubmit={handleOnSubmit}>
                
            </forn>
        </div>
    )
}

export default CreateForum

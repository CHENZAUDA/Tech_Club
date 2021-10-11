import React, {useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
const CreateForum = () => {
    const [title,setTitle] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const data = { 
            // title,
            // content,
            // userId: user._id,
            // forumId: id
        };

        //  לבצע משיכת מידע ולעשות פוסט על נושא שנוצר
        // const {_id} = response.data;
        // history.push('/thread/' + _id);

        // use fetch post category
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

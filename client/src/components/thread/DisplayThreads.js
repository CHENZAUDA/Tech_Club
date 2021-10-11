import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

const DisplayThreads = () => {
    const [categories,setCategories] = useState([]);
// fetch thread , posts
    useEffect(()=> {
        getCategories();
    },[]);

    const getCategories = async () => {
        fetch('localhost:3000/api.category')
        .then(res => res.json())
        .then(data => setCategories(data));
    };

    const history = useHistory();

    return (
        <div>
            <h1>Display Threads</h1>


            <div>
                {categories.map((category,index)=> (
                    <div button onClick={()=> history.push(`/category/${category._id}`)}> 
                    
                    <div><h3>{category.title}</h3>
                    <h3>{category.createdAt}</h3>
                    </div>
                    </div>
                ))}
                <li></li>
            </div>
        </div>
    )
}

export default DisplayThreads

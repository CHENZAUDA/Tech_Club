import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

const DisplayCategories = () => {
    // const [categories,setCategories] = useState([]);

    // useEffect(()=> {
    //     getCategories();
    // },[]);

    // const getCategories = async () => {
    //     fetch('localhost:3000/api.category')
    //     .then(res => res.json())
    //     .then(data => setCategories(data));
    // };

    const history = useHistory();

    const categories = [{
        title:"Matan Baynessai", createdAt:"12/10/2021"
    },{
        title:"Matan Baynessai", createdAt:"12/10/2021"
    },{
        title:"Matan Baynessai", createdAt:"12/10/2021"
    }]



    return (
        <div>
            <h1>Display Category</h1>


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

export default DisplayCategories

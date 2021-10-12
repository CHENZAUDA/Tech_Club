import React, {useState, useEffect} from 'react'
import {useHistory,useParams,Link} from 'react-router-dom';

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
    const {id} = useParams();

    const history = useHistory();
    const categories = [{
        title:"react" , createdAt:"12/05/2021" ,id:1
    },
    {
        title:"java xscript" , createdAt:"12/05/2021" ,id:2
    },
    {
        title:"SQL" , createdAt:"12/05/2021",id:3,
    }]

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
                    <div button onClick={()=> history.push(`/category/${category.id}`)}> 
                    <Link to={`/forum/display/${category.id}`}>
                    <div><h3>{category.title}</h3>
                    <h3>{category.createdAt}</h3>
                    </div>
                    </Link>
                    </div>
                ))}
                <li>im {id}</li>
            </div>
        </div>
    )
}

export default DisplayCategories

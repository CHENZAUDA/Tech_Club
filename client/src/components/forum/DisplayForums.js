import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import '../../App.css';

const DisplayForums = () => {
    const [categories,setCategories] = useState([]);
// fetch threads , forums
    // useEffect(()=> {
    //     getCategories();
    // },[]);

    // const getCategories = async () => {
    //     fetch('localhost:3000/api.category')
    //     .then(res => res.json())
    //     .then(data => setCategories(data));
    // };

    const history = useHistory();

    return (
        <div className="forum-body">
            <h1>Tech-Club Offical Forum</h1>
            <div className="forum-box">
            <div className="forums interview" onClick={()=> history.push('/category/interviews')}>
                <img src="https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300rem" width="637rem"/>
                <div className="header-top">ריאיונות עבודה</div></div>
            <div className="forums homework"><img src="https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300rem" width="637rem"/><div  className="header-top">שיעורי בית</div></div>
            <div className="forums insurance"><img src="https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300rem" width="637rem"/><div  className="header-top">ביטוח לאומי</div></div>
            <div className="forums platforms"><img src="https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="300rem" width="637rem"/><div className="header-top">חומר מקצועי</div></div>
            </div>

            {/* <div>
                {categories.map((category,index)=> (
                    <div button onClick={()=> history.push(`/category/${category._id}`)}> 
                    
                    <div><div>{category.title}</div>
                    <div>{category.createdAt}</div>
                    </div>
                    </div>
                ))}
                <li></li>
            </div> */}
        </div>
    )
}

export default DisplayForums

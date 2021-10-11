import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom';
import '../../App.css'
const ShowAllCategories = () => {
    // const [category,setCategory] = useState([]);
    const {id} = useParams();
    // useEffect(()=> {
    //     getCategory();
    // },[]);

    // const getCategory = async () => {
    //     fetch(`localhost:3000/api/category/${id}`)
    //     .then(res => res.json())
    //     .then(data => setCategory(data));
    // };

    const history = useHistory();

    return (
        <div className="forum-body ">
            <h2 className="job-interview-header">ריאיונות עבודה</h2>
            <div className="category-boxes" onClick={()=> history.push('/new')}> 
            <div className="category-header" >הכנה לריאיון </div>
            <div className="category-line"></div>
            <div className="category-body">קטגוריה אשר עוסקת בהכנה לשלבים הראשונים של ריאיון העבודה , חומר מקצועי מומלץ ללמידה ועוד</div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header">ריאיון טלפוני ומטלת בית </div>
            <div className="category-line"></div>
            <div className="category-body">קטגוריה אשר עוסקת בשלב הריאיון הטלפוני וסוגי מטלות הבית שחברות הייטק שולחות למועמדים</div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header">ריאיון מקצועי </div>
            <div className="category-line"></div>
            <div className="category-body">שאלות מקצועיות בכל הפלטפורמות למועמדים לריאיונות עבודה - שישותפו על ידי בוגרים וסטודנטים </div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header">HR ריאיון </div>
            <div className="category-line"></div>
            <div className="category-body">איך מתמודדים עם ריאיון בתחום משאבי האנוש? כל התשובות לשאלות בפורום הזה!</div>
            </div>
                {/* {category && <h1></h1>} */}
           
        </div>
    )
}

export default ShowAllCategories;

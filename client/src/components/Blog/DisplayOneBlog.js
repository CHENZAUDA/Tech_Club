import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {blogAPI} from '../../service/api.service'
import './DisplayBlog.css'

const DisplayOneBlog = () => {
    const {id} = useParams();
    const [displayBlog,setDisplayBlog] = useState();

    const getBlog =  async () => {
        await fetch(`${blogAPI}/blogById/${id}`)
        .then(res => res.json())
        .then(data => setDisplayBlog(data.blog))
}
useEffect(()=>{
        getBlog()
    },[])
    return (
            
            <div class="container-article">
  <div class="header">
    <h1>ריאקט
</h1>
  <div class="author">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"/>
  </div>  
  </div>
  <div class="content">
  <div class="text">
  <h2>ריאקט הגרסה החדשה 17.07</h2>
    <p>לנסות את React
React תוכננה מלכתחילה לאימוץ הדרגתי, ואתם יכולים להשתמש ב-React מעט או יותר לפי צרכיכם. בין אם אתם רוצים לקבל טעימה של React, להוסיף קצת אינטראקטיביות לדף HTML פשוט, או להתחיל יישום מורכב מופעל React, הקישורים בסעיף זה יעזור לכם להתחיל.

מגרש משחקים אונליין
אם אתם מעוניינים לשחק עם React, תוכלו להשתמש במגרש משחקים של קוד אונליין. נסו את תבנית שלום עולם ב-CodePen, CodeSandbox, או Stackblitz.

אם אתם מעדיפים להשתמש בעורך הטקסט שלכם, תוכלו גם להוריד קובץ HTML זה, לערוך אותו, ולפתוח אותו ממערכת הקבצים המקומית בדפדפן שלכם. זה מאט את הטרנספורמציה של הקוד בזמן הריצה, אז היינו ממליצים להשתמש בזה רק עבור הדגמות פשוטות.

</p>
</div>
<div class="info"> <a href="#" target="_blank"> Continue Reading...</a></div>
</div>
</div>
    )
}

export default DisplayOneBlog

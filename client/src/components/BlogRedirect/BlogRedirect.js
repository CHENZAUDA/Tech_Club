import React,{useState,useEffect} from 'react'
import './blogredirect.css'

export default function BlogRedirect() {
    const [data , setData] = useState("")

    // useEffect(() => {
    //     fetch("http://localhost:8080/")
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }, [])

    return (
        <div className="redierct-container">
            <button >צור פוסט</button>
            <input className="comment-input" placeholder="...הוסף תגובה" type="text" />
            
        </div>
    )
}

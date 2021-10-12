import React,{useState,useEffect} from 'react'
import './blogredirect.css'

export default function BlogRedirect() {
    const [data , setData] = useState("")
    const [isClicked , setIsClicked] = useState(false)
    const [data , setData] = useState("")

    // useEffect(() => {
    //     fetch("http://localhost:8080/")
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }, [])

    return (
        <div className="redierct-container">
            <button onClick={setIsClicked(false?true:false)}>צור פוסט</button>
            {
                isClicked ? <input onChange={(e => {setData(e.target.value)})} className="comment-input" placeholder="...הוסף תגובה" type="text" />:""
            }
            
            {/* <button onClick={()=>{}}>שלח תגובה</button> */}
            <h3>{data}</h3>

        </div>
    )
}

import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom';
import '../../App.css'
const ShowOneCategory = () => {
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
            <h1 className="job-forum-header">{id}הכנה לריאיון</h1>
            <div className="addorfilter">
                <div>חפש <input type="text" /><button>חיפוש</button> {id} בחר נושא <select><option></option><option>A</option><option>B</option></select></div>
                <div><button>העלה נושא חדש</button></div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header" ><i class="far fa-envelope" style={{fontSize:"40px",marginRight:"10px",marginTop:"20px"}}></i> </div>
            <div className="category-line"></div>
            <div className="category-body">
                <h2>עזרה בנושא הכנה לריאיון עבודה</h2>
                <h6>נוצר ע''י : יוני ביטאו</h6>
                <h6>נושא: ריאיון עבודה</h6>
                <h6>תאריך: 11/10/2021</h6>
                
                
                </div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header" ><i class="far fa-envelope" style={{fontSize:"40px",marginRight:"10px",marginTop:"20px"}}></i> </div>
            <div className="category-line"></div>
            <div className="category-body">
                <h2>עזרה בנושא הכנה לריאיון עבודה</h2>
                <h6>נוצר ע''י : חן זאודה</h6>
                <h6>נושא: ריאיון עבודה</h6>
                <h6>תאריך: 11/10/2021</h6>
                
                
                </div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header" ><i class="far fa-envelope" style={{fontSize:"40px",marginRight:"10px",marginTop:"20px"}}></i> </div>
            <div className="category-line"></div>
            <div className="category-body">
                <h2>חברת סטארטפ התקשרה אליי, מה עושים?</h2>
                <h6>נוצר ע''י : יהודה אישטה</h6>
                <h6>נושא: ריאיון עבודה</h6>
                <h6>תאריך: 11/10/2021</h6>
                
                
                </div>
            </div>
            <div className="category-boxes"> 
            <div className="category-header" ><i class="far fa-envelope" style={{fontSize:"40px",marginRight:"10px",marginTop:"20px"}}></i> </div>
            <div className="category-line"></div>
            <div className="category-body">
                <h2>מה לבחור? צריכה עזרה</h2>
                <h6>נוצר ע''י :מיכל פרדה</h6>
                <h6>נושא: ריאיון עבודה</h6>
                <h6>תאריך: 11/10/2021</h6>
                
                
                </div>
            </div>
            
                {/* {category && <h1></h1>} */}
           
        </div>
    )
}

export default ShowOneCategory;

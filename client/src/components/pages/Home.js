import React from 'react'
import '../../App.css'
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    return (
        <div className="home-body">
            <h1>This is Home</h1>

            <h3>Go to Forum : 
            </h3>
            <button onClick={()=> history.push('/forum')}>Click</button>
        </div>
    )
}

export default Home

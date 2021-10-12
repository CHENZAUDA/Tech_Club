import React from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import RegisterOneForm from '../userauth/RegisterOneForm'
import RegisterTwoForm from '../userauth/RegisterTwoForm'
import Home from '../pages/Home'
import LoginForm from '../userauth/LoginForm'
import ForgotPassword from '../userauth/ForgotPassword'
// import DisplayForums from '../forum/DisplayForums'
// import ShowOneCategory from '../category/ShowOneCategory'
// import ShowAllCategories from '../category/ShowAllCategories'



const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/register/two">
                        <RegisterTwoForm/>
                    </Route>
                    <Route  path="/register/one">
\                        <RegisterOneForm/>
                    </Route>
                    <Route  path="/login">
\                        <LoginForm/>
                    </Route>
                    <Route  path="/forgotpass">
\                        <ForgotPassword/>
                    </Route>
                    {/* <Route path="/auth/login"> */}
                        {/* {!user ? <Login/> : <Redirect to="/" />} */}
                    {/* </Route>
                    <Route path="/auth/register"> */}
                        {/* {!user ? <Register/> : <Redirect to="/" />} */}
                    {/* </Route>
                    <Route path="/category/create"> */}
                        {/* {!user ? <CreateCategory/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/category/interviews">
                        <ShowAllCategories/> 
                    </Route>
                    <Route path="/category"> */}
                        {/* {!user ? <DisplayCategories/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/forum">
                       <DisplayForums/> 
                    </Route>

                    <Route path="/forum/:id"> */}
                        {/* {!user ? <ShowOneForum/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route  path="/category/interviews/test"> */}
                        {/* <ShowOneCategory/> */}
                        {/* <Home/>
                    </Route>
                    <Route path="/forum/create/:id"> */}
                        {/* {!user ? <CreateForum/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/thread/create/:id"> */}
                        {/* {!user ? <CreateThread/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/thread/:id"> */}
                        {/* {!user ? <ShowOneThread/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/thread"> */}
                        {/* {!user ? <DisplayThreads/> : <Redirect to="/auth/login" />} */}
                    {/* </Route>
                    <Route path="/new">
                        <ShowOneCategory/>
                                            </Route> */}
                </Switch>
            </Router>
        </>
    )
}

export default AppRouter;

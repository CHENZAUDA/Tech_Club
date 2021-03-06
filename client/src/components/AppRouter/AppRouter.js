import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegisterOneForm from "../userauth/RegisterOneForm";
import RegisterTwoForm from "../userauth/RegisterTwoForm";
import ShowOneCategory from "../category/ShowOneCategory";
import ShowAllCategories from "../category/ShowAllCategories";
import BlogRedirect from "../BlogRedirect/BlogRedirect";
import BlogComponent from "../Blog/BlogComponent";
import SocialMediaCom from "../Social Media/SocialMediaCom";
import DisplayCategories from "../category/DisplayCategories";
import Products from '../products/Products'
import DisplayProduct from '../products/DisplayProduct'
import CartStore from '../cart/CartStore'
import ShowBlogs from '../Social Media/ShowBlogs'
import Home from '../pages/Home/Home'
import LoginForm from '../userauth/LoginForm'
import AdminPanel from '../admin/AdminPanel'
import { ProtectedRoute } from './ProtectedRoute';
import UserFinalRegister from '../userauth/UserFinalRegister'
import JobInterView from '../JobInterview/JobInterView'
import DisplayOneBlog from '../Blog/DisplayOneBlog'
import Navbar from '../featuers/Navbar/Navbar'


const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  return (
    <>
      <Router>
              <Navbar isLogin={isLogin} />
        <Switch>
          <Route exact path="/">

            {isLogin? <Home loggedIn={true}/> : <Home/> }
            <SocialMediaCom/>
            <JobInterView/>
            <BlogComponent/>
          </Route>
          <Route path="/store">
            <Products/>
          </Route>
          <Route path="/display-category">
            <DisplayCategories/>
          </Route>
          <Route path="/product/:id">
            <DisplayProduct/>
          </Route>
          <Route path="/cart">
            <CartStore />
          </Route>
          <Route path="/blog/:id">
            <DisplayOneBlog/>
          </Route>
          <Route path="/blogtest/:id">
            <ShowBlogs />
          </Route>
          <Route path="/category/interviews/">
            <ShowAllCategories />
          </Route>
          <Route path="/forum">
          </Route>
          <Route path="/blogs">
            <BlogComponent />
          </Route>
          <Route path="/blog">
            <BlogRedirect />
          </Route>
          <Route path="/socialmedia">
            <SocialMediaCom />
          </Route>
          <Route path="/forum/display/">
            <ShowOneCategory />
          </Route>
          <Route path="/new">
            <DisplayCategories />
          </Route>
          <Route path="/register/one">
            <RegisterOneForm />
          </Route>
          <Route path="/register/two">
            <RegisterTwoForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/userfinalregister">
            <UserFinalRegister />
          </Route>
          <ProtectedRoute  path="/adminpanel">
            {isLogin?  <AdminPanel/> : <Redirect to="/"/>}
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;

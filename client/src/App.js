import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import Products from "./components/products/Products";
import Navbar from "./components/featuers/Navbar/Navbar";
import JobInterView from "./components/JobInterview/JobInterView";
function App() {
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
      <JobInterView />
      <Navbar />
      <AppRouter />
      {/* <Products/> */}
      {/* <RegisterOneForm/> */}
      {/* <RegisterTwoForm/> */}

      {/* <LoginForm/>  */}
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;

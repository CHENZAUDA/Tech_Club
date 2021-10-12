import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./context/AuthContext";
import AppRouter from "./components/AppRouter/AppRouter";
import ButtonAppBar from "./components/featuers/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
      <ButtonAppBar />

      <AppRouter />
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;

<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./context/AuthContext";
import AppRouter from "./components/AppRouter/AppRouter";
import RegisterOneForm from "./components/userauth/RegisterOneForm";
import LoginForm from "./components/userauth/LoginForm";
import RegisterTwoForm from "./components/userauth/RegisterTwoForm";
import Navbar from "./components/featuers/Navbar/Navbar"
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import { LockOutlinedIcon } from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import LearningContect from "./components/pages/learningContent/LearningContent";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "right",
  },
  avatar: {
    margin: "1px",
    backgroundColor: "#f4f4f4",
  },
  input: {
    textAlign: "right",
  },
  form: {
    width: "100%",
    marginTop: "1px",
    display: "inline-block",
    textAlign: "right",
  },
  submit: {
    margin: "3px 0x 2px",
  },
  para: {
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
=======
import logo from './logo.svg';
import './App.css';
import AuthContext from './context/AuthContext';
import AppRouter from './components/AppRouter/AppRouter';
import Products from './components/products/Products'

function App() {
>>>>>>> 6f69ca60432f4de630db4d7524844f2dbcc13808
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
<<<<<<< HEAD
      {/* <LearningContect/> */}
      <AppRouter />


      {/* <LoginForm/>  */}
=======
        <AppRouter/>
        {/* <Products/> */}
        {/* <RegisterOneForm/> */}
        {/* <RegisterTwoForm/> */}
        
        {/* <LoginForm/>  */}
>>>>>>> 6f69ca60432f4de630db4d7524844f2dbcc13808
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;

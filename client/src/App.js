<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./context/AuthContext";
import AppRouter from "./components/AppRouter/AppRouter";
import ButtonAppBar from "./components/featuers/Navbar/Navbar";
=======
import logo from './logo.svg';
import './App.css';
import AuthContext from './context/AuthContext';
import AppRouter from './components/AppRouter/AppRouter';
import RegisterOneForm from './components/userauth/RegisterOneForm';
import LoginForm from './components/userauth/LoginForm';
import RegisterTwoForm from './components/userauth/RegisterTwoForm';
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
  Typography
} from "@mui/material";
import {LockOutlinedIcon} from '@material-ui/icons'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(  theme => ({
    paper: {
        marginTop: "8px",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'right'
    },
    avatar: {
        margin: "1px",
        backgroundColor: "#f4f4f4",
    },
    input:{
        textAlign:'right'
    },
    form: {
        width:'100%',
        marginTop: "1px",
        display:'inline-block',
        textAlign:'right'
    },
    submit: {
        margin: "3px 0x 2px",
    },
    para:{
        textAlign:"center"
    }
}))
>>>>>>> 6ebf481143dfc7a55b53f3a50aa127d91306895c

function App() {
   const classes = useStyles();
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
<<<<<<< HEAD
      <ButtonAppBar />

      <AppRouter />
=======
        <AppRouter/>
        {/* <RegisterOneForm/> */}
        {/* <RegisterTwoForm/> */}
        
        {/* <LoginForm/>  */}
>>>>>>> 6ebf481143dfc7a55b53f3a50aa127d91306895c
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;

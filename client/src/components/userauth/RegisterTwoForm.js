import React , {useState,useEffect} from 'react'
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
  Select
} from "@mui/material";
import {makeStyles} from '@mui/styles'
import {useHistory} from 'react-router-dom'
import {userAPI} from '../../service/api.service'

const useStyles = makeStyles(  theme => ({
    paper: {
      marginTop: "8px",
      padding:"4px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:"#deeaee",
      borderRadius:"15px"
    },
    para:{
        textAlign:"center"
    },
    avatar: {
      margin: "1px",
      backgroundColor: "red",
    },
    form: {
      width: "80%",
      marginTop: "1px",
      direction: "rtl"
    },
    submit: {
      margin: "3px"

    },
    input:{
         padding:"5px"
    }
}))

const RegisterTwoForm = () => {
    const classes= useStyles();
    const history = useHistory();
    const [password,setPassword] = useState(null);
    const [email,setEmail] = useState(null);
    const [userName,setUserName] = useState(null);

    const getUserDetails = localStorage.getItem('userRegister');
    const userInfo = JSON.parse(getUserDetails);
    const newUser = {...userInfo,email:email,password:password,userName:userName}

    const registerUser =(newUser) => {
      if(!newUser.email || !newUser.password){
        alert("not details included")
        return;
      }

      console.log(newUser)
      fetch(`${userAPI}`, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
    }
    
    return (
        <div className="animate__animated animate__fadeInDown">
        <Container component="main" maxWidth="xs" >
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlined/> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    2/2 TechTalk הרשמת משתמשים
                </Typography>
                <form className={classes.form} noValidate>
                    
                    <div className={classes.input}> 
                    <TextField 
                    required 
                    fullWidth
                    id="email"
                    label="אימייל"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField 
                    required 
                    fullWidth
                    id="username"
                    label="שם משתמש"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField 
                    required
                    fullWidth
                    name="password"
                    label="סיסמה"
                    type="password"
                    id="password"
                    
                    autoComplete="current-password"
                    
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="אמת סיסמה"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    autoComplete="current-password"
                    
                    />
                    </div>
                    
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="תזכור אותי" 
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="הרשמו לניוזלטר לקבלת עדכונים שוטפים" 
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=> registerUser(newUser)}
                    className={classes.submit}>הרשם - שלב 2/2</Button>
                </form>
            </div>
        
        </Container>
        </div>
    )
}

export default RegisterTwoForm

import React , {useState} from "react";
import Box from "@material-ui/core/Box";
import {useHistory} from 'react-router-dom'
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
import {makeStyles} from '@mui/styles'
import {userLoginAPI} from '../../service/api.service'

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

const LoginForm = () => {
    const classes = useStyles();
      const history=useHistory();
      const [userName,setUserName] = useState('');
      const [password,setPassword] = useState('');
      const user = {userName:userName,password:password}
      const loginUser = async (user) => {
       await fetch(`${userLoginAPI}`, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => localStorage.setItem('token',data.data))
;
history.push('/');
      }
  return (
     <Container component="main" maxWidth="xs" style={{paddingTop:"5rem"}}>
            <CssBaseline />
      <div className="classes">
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          </Avatar>
        <Typography component="h1" variant="h5">
          התחבר
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="שם משתמש"
            name="userName"
            autoComplete="userName"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="תזכור אותי"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> loginUser(user)}
          >
            התחבר
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={()=> history.push('/forgotpass')} variant="body2">
                שכחת סיסמה?
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"אין לך משתמש? הרשם"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
           </Container>
  );
};

export default LoginForm;

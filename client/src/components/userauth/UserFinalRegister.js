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

const UserFinalRegister = () => {
    const classes = useStyles();
      const history=useHistory();
      const [userName,setUserName] = useState('');
      const [password,setPassword] = useState('');
      const user = {userName:userName,password:password}
      const updateUser = async (user) => {

        try{
       await fetch(`${userAPI}/update`, {
  method: 'PUT', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => data)
    alert("User details updated!")

    history.push('/');

;} catch(error){
    alert("No Username exists at database!!")
    history.push('/');
}

      }
  return (
     <Container component="main" maxWidth="xs" style={{paddingTop:"5rem"}}>
            <CssBaseline />
      <div className="classes">
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          </Avatar>
        <Typography component="h1" variant="h5">
          אישור הרשמה סופי
        </Typography>
        <form className={classes.form} noValidate>
            אנא הקלד את שם המשתמש שלך לאימות:
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userName"
            label="שם משתמש"
            type="userName"
            id="userName"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            autoComplete="userName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה סופית"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=> updateUser(user)}
          >
            הרשם
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

export default UserFinalRegister;

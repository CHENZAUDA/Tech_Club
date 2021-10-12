import React from 'react'
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
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField 
                    required
                    fullWidth
                    name="confirm-password"
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
                    onClick={()=> history.push('/login')}
                    className={classes.submit}>הרשם - שלב 2/2</Button>
                </form>
            </div>
        
        </Container>
        </div>
    )
}

export default RegisterTwoForm

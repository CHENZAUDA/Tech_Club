import React from "react";
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

const ForgotPassword = () => {
    const classes = useStyles();
      const history=useHistory();

  return (
     <Container component="main" maxWidth="xs">
            <CssBaseline />
      <div className="classes">
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          </Avatar>
        <Typography component="h1" variant="h5">
          איפוס סיסמה
        </Typography>
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="אימייל"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div className={classes.submit}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            אפס סיסמה!
          </Button>
          </div>
          <div className={classes.submit}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            לא קיבלת מייל? שלח שוב
          </Button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link onClick={()=> history.push('/register/one')} variant="body2">
                {"אין לך משתמש? הרשם"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
           </Container>
  );
};

export default ForgotPassword;

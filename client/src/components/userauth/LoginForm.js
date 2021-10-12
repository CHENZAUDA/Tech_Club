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

const LoginForm = () => {
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
          התחבר
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="תזכור אותי"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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

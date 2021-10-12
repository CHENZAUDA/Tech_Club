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
import {LockOutlined} from '@mui/icons-material'


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
    },
    line:{
        padding:"7px",
        fontSize:"14px",
        fontWeight:"700"
    }
}))

const RegisterOneForm = () => {
    const classes= useStyles();
    const history=useHistory();
    return (
        <Container component="main" maxWidth="xs">
            
            <CssBaseline/>
            <div className={classes.paper}>
                
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>

                <Typography component="h1" variant="h5">
                    1/2 TechTalk הרשמת משתמשים
                </Typography>
                <Typography component="p" className={classes.para}>
                    ברוכים הבאים לקהילה שלנו 
                    <br/>
                     אנא מלאו את הפרטים הבאים בשביל שנוכל להכיר אותכם יותר ולסנכרן בין הסטודנטים לבוגרים שלנו.
                </Typography>
                <form className={classes.form} noValidate>
                    <div className={classes.input}> 
                    <TextField 
                    required 
                    fullWidth
                    id="firstname"
                    label="שם פרטי"
                    name="firstName"
                    autoComplete="firstname"
                    autoFocus
                     
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField 
                    required 
                    fullWidth
                    id="lastname"
                    label="שם משפחה"
                    name="lastName"
                    autoComplete="lastname"
                    autoFocus
                    />
                    </div>
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
                    id="phone"
                    label="פלאפון"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField
                    required
                    fullWidth
                    name="linkedIn"
                    label="פרופיל לינקדין"
                    type="text"
                    id="linkedIn"
                    autoComplete="current-password"
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField
                    required
                    fullWidth
                    name="github"
                    label="פרופיל גיטהאב"
                    type="text"
                    id="github"
                    autoComplete="github"
                    />
                    </div>
                    <div className={classes.input}> 
                    <TextField
                    required
                    fullWidth
                    name="address"
                    label="כתובת"
                    type="address"
                    id="address"
                    autoComplete="address"
                    />
                    </div>
                    <div className={classes.para}>
                    <div className={classes.line}>לטובת ממשק עם סטודנטים / בוגרים</div>
                    <div className={classes.line}>דרג/י את הפלטפורמות שאת/ה בקיא/ה בהן מ1-3</div>
                    <div className={classes.line}>לפי תעדוף של 1 - הכי טוב , ו3 הכי פחות טוב</div>

                    <div>פלטפורמה ראשונה:</div>
                    <Select
                  native
                 
                >
                    
                  <option value={0}>אופציה 1</option>
                  <option value={1}>React</option>
                  <option value={2}>C#</option>
                  <option value={2}>Redux</option>
                  <option value={2}>MySQL</option>
                  <option value={2}>MongoDB</option>
                </Select>
                    
                    <div>פלטפורמה שנייה</div>
                    <Select
                  native
                 
                >
                    
                  <option value={0}>אופציה 2</option>
                  <option value={1}>React</option>
                  <option value={2}>C#</option>
                  <option value={2}>Redux</option>
                  <option value={2}>MySQL</option>
                  <option value={2}>MongoDB</option>
                </Select>
                   
                   <div>פלטפורמה שלישית</div>
                    <Select
                  native
                 
                >
                    
                  <option value={0}>אופציה 3</option>
                  <option value={1}>React</option>
                  <option value={2}>C#</option>
                  <option value={2}>Redux</option>
                  <option value={2}>MySQL</option>
                  <option value={2}>MongoDB</option>
                </Select>
               </div>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=> history.push('/register/two')}
                    className={classes.submit}>הבא - שלב 1/2</Button>
                    
                    <Grid container className={classes.para}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                שכחת סיסמה?
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.para}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {"אין לך משתמש? הרשם"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        
        </Container>
    )
}

export default RegisterOneForm

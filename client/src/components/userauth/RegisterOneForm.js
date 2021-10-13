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
    const [address,setAddress] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [email,setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [github,setGithub] = useState(null);
    const [optionOne,setOptionOne] = useState({pref:{type:[{}]}})
    const [optionTwo,setOptionTwo] = useState({pref:{type:[{}]}})
    const [optionThree,setOptionThree] = useState({pref:{type:[{}]}})

    const beginStepTwo = () => {
      const convertObject = {address:address,firstName:firstName,lastName:lastName,phone:phone,github:github,optionOne:optionOne,optionTwo:optionTwo,optionThree:optionThree}
      localStorage.setItem('userRegister',JSON.stringify(convertObject)) 
      history.push('/register/two')
    }
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
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
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
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}

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
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}

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
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}

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
                    value={github}
                    autoComplete="github"
                    onChange={(e)=> setGithub(e.target.value)}

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
                    value={address}
                    autoComplete="address"
                    onChange={(e)=> setAddress(e.target.value)}

                    />
                    </div>
                    <div className={classes.para}>
                    <div className={classes.line}>לטובת ממשק עם סטודנטים / בוגרים</div>
                    <div className={classes.line}>דרג/י את הפלטפורמות שאת/ה בקיא/ה בהן מ1-3</div>
                    <div className={classes.line}>לפי תעדוף של 1 - הכי טוב , ו3 הכי פחות טוב</div>

                    <div>פלטפורמה ראשונה:</div>
                    <Select
                  native
                 onChange={(e)=> setOptionOne({pref:{type:[{option_1:e.target.value}]}})}
                >
                    
                  <option value={0}>אופציה 1</option>
                  <option value={optionOne.pref.type.option_1}>React</option>
                  <option value={optionOne.pref.type.option_1}>C#</option>
                  <option value={optionOne.pref.type.option_1}>Redux</option>
                  <option value={optionOne.pref.type.option_1}>MySQL</option>
                  <option value={optionOne.pref.type.option_1}>MongoDB</option>
                </Select>
                    
                    <div>פלטפורמה שנייה</div>
                    <Select
                  native
                                  onChange={(e)=> setOptionTwo({pref:{type:[{option_2:e.target.value}]}})}

                >
                    
                  <option value={0}>אופציה 2</option>
                  <option value={optionTwo.pref.type.option_2}>React</option>
                  <option value={optionTwo.pref.type.option_2}>C#</option>
                  <option value={optionTwo.pref.type.option_2}>Redux</option>
                  <option value={optionTwo.pref.type.option_2}>MySQL</option>
                  <option value={optionTwo.pref.type.option_2}>MongoDB</option>
                </Select>
                   
                   <div>פלטפורמה שלישית</div>
                    <Select
                  native
                                  onChange={(e)=> setOptionThree({pref:{type:[{option_3:e.target.value}]}})}

                >
                    
                  <option value={0}>אופציה 3</option>
                  <option value={optionThree.pref.type.option_3}>React</option>
                  <option value={optionThree.pref.type.option_3}>C#</option>
                  <option value={optionThree.pref.type.option_3}>Redux</option>
                  <option value={optionThree.pref.type.option_3}>MySQL</option>
                  <option value={optionThree.pref.type.option_3}>MongoDB</option>
                </Select>
               </div>
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={beginStepTwo}
                    // onClick={()=> history.push('/register/two')}
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

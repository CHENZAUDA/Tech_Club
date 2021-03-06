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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
    const [open, setOpen] = useState(false);

    const getUserDetails = localStorage.getItem('userRegister');
    const userInfo = JSON.parse(getUserDetails);
    const newUser = {...userInfo,email:email,password:password,userName:userName}


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      history.push('/home')
    };
  
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
.then(data => data)
localStorage.removeItem("userRegister")

    }
    
    return (
        <div className="animate_animated animate_fadeInDown">
        <Container component="main" maxWidth="xs" >
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlined/> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    2/2 TechTalk ?????????? ??????????????
                </Typography>
                <form className={classes.form} noValidate>
                    
                    <div className={classes.input}> 
                    <TextField 
                    required 
                    fullWidth
                    id="email"
                    label="????????????"
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
                    label="???? ??????????"
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
                    label="??????????"
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
                    label="?????? ??????????"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    autoComplete="current-password"
                    
                    />
                    </div>
                    
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="?????????? ????????" 
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="?????????? ???????????????? ?????????? ?????????????? ????????????" 
                    />
                    
                    <Button  variant="outlined" fullWidth
                    variant="contained" className={classes.submit}
                    color="primary" onClick={()=>{
                      registerUser(newUser)
                      handleClickOpen()
                    }}>
                      ???????? - ?????? 2/2
                    </Button>  
                </form>
                
                      <>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"?????????? ?????????? ?????????????? ????????"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          ?????????? ???????? ?????????? ????????????, ?????? ???????? ???????????? ???????? ?????? ???? ?????? ???????? ???? ???????????? ??????.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>???????? ????????</Button>
                        
                      </DialogActions>
                    </Dialog></>
            </div>
        
        </Container>
        </div>
    )
}

export default RegisterTwoForm
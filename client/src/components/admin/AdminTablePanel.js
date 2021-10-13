import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AdminPanel.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function AdminTablePanel() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/api/user')
        .then(res=> res.json())
        .then(userList=> setUsers(userList.data))
    },[])
  return (
      <div className="table-body-page">
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{width:"100%"}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>שמות משתמשים</StyledTableCell>
            <StyledTableCell align="right">גיטהאב</StyledTableCell>
            <StyledTableCell align="right">פלאפון</StyledTableCell>
            <StyledTableCell align="right">אימייל</StyledTableCell>
            <StyledTableCell align="right">מאושר / לא מאושר</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.userName}>
              <StyledTableCell component="th" scope="row">
                {user.github}
              </StyledTableCell>
              <StyledTableCell align="right">{user.phone}</StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user.address}</StyledTableCell>
              <StyledTableCell align="right"><button className="btn-approve">אשר משתמש</button>
              <button className="btn-approve">בטל אישור</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
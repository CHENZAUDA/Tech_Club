import React , {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CartStore.css'
import {useHistory} from 'react-router-dom'
import {clearCart,removeFromCart,getTotals} from '../../redux/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import { Star } from '@mui/icons-material';



export default function CartStore() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const removeProductFromCart=(product)=> {
        dispatch(removeFromCart(product));
    }
    const clearAllFromCart=()=> {
        dispatch(clearCart());
    }

    useEffect(()=>{
        dispatch(getTotals());
    },[cart,dispatch])
  return (
      <div className="cart-table" >
          <img src="https://st4.depositphotos.com/33133132/39355/v/450/depositphotos_393554012-stock-illustration-green-leaf-shopping-cart-logo.jpg" height="150px" width="150px"/>
    <TableContainer component={Paper}>
      <Table sx={{ Width: "500px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>רשימת מוצרים</TableCell>
            <TableCell align="right">כמות</TableCell>
            <TableCell align="right">תיאור</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">תמונה</TableCell>
            <TableCell align="right">הסר מהרשימה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((product,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{fontWeight:"800"}}>
                {product.title}
              </TableCell>
              <TableCell align="right"><select><option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option></select></TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right" style={{color:"green",fontSize:"1rem",fontWeight:"700"}}>{product.price}<Star sx={{ color: "gold",fontSize: "15px"}}/></TableCell>
              <TableCell align="right"><img src={product.image} alt={product.title} className="cart-product-img" onClick={()=> history.push(`/product/${product._id}`)}/></TableCell>
              <TableCell align="right"><button onClick={()=> removeProductFromCart(product)}>מחק</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<button onClick={clearAllFromCart}>Clear Cart</button>
    <button onClick={()=> history.push('/products')}>Back to Shop</button>
    </div>
  );
}
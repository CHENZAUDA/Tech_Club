import React , { useEffect} from 'react'
import { getProductDetails } from "../../redux/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom' 
import { Star } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useHistory} from 'react-router-dom'
import { addToCart } from "../../redux/cartSlice";

import './Products.css';

const DisplayProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const history = useHistory();
 
  const getProduct = useSelector((state) => state.productDetails);
  const { product, loading, error } = getProduct;

  const addProductToCart =(product) => {
      dispatch(addToCart(product))
      history.push('/cart')
  }
    return (
        <div className="products-screen">
            {loading? <h1>Loading...</h1> : 
            <div className="product-display">
                <img src={product.image} alt={product.title} />
                <div className="product-details"> 
                    <h2 className="product-header">{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}<Star sx={{ color: "gold",fontSize: "15px"}}/></p>
                </div>
                 <Button variant="contained" onClick={()=> addProductToCart(product)}>
                     <ShoppingCartTwoToneIcon>icon</ShoppingCartTwoToneIcon>
                     הוספה לסל</Button>
            </div>

            }
        </div>
    )
}

export default DisplayProduct

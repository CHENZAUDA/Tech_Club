import React, {useEffect} from 'react'
import { getProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import './Products.css';
import { Star } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { addToCart } from "../../redux/cartSlice";



const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addProductToCart =(product) => {
      dispatch(addToCart(product))
  }

  const getAllProducts = useSelector((state) => state.products);
  const { products, loading, error } = getAllProducts;
    return (
      <div className="products-screen">
        <img src="https://elements-cover-images-0.imgix.net/d10a72e7-315e-4c46-ada8-e94ae2992598?auto=compress%2Cformat&fit=max&w=1370&s=aef79922a798dc7c578a095616040e95" height="50%" width="500px" />
        <div className="products-body">
            {loading? <div>Loading...</div> : products?
             products.map((product)=>(
                <div className="products-card">
                    <h4>{product.title}</h4>
                    <p className="product-desc">{product.description}</p>
                    <img src={product.image} alt={product.title} className="product-img-display"/>
                    <div className="star-icon"><IconButton color="primary" aria-label="add to shopping cart" onClick={()=> addProductToCart(product)}>
                      <AddShoppingCartIcon />
                    </IconButton></div>
                    <p>{product.price}<Star sx={{ color: "gold",fontSize: "15px"}}/></p>
                    <Button variant="contained" onClick={()=>history.push(`/product/${product._id}`)}>Get Details</Button>
                    
                </div>
            )) : error&& <h2>Error Loading Products</h2>
}
        </div> 
        </div>
    )
}

export default Products

import React , { useEffect} from 'react'
import { getProductDetails } from "../../redux/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom' 
import './Products.css';

const DisplayProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  
 
  const getProduct = useSelector((state) => state.productDetails);
  const { product, loading, error } = getProduct;
    return (
        <div className="products-screen">
            <div>
                <img src={product.image} alt={product.title} />
            </div>
        </div>
    )
}

export default DisplayProduct

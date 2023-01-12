import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getAllProducts } from '../../features/productsSlice';
import Product from '../Product/Product';

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts());
        // eslint-disable-next-line
        }, []);

  return (
    <div>
        <Product/>
    </div>
  )
}

export default Products
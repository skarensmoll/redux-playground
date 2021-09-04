import React from 'react';
import {useParams} from 'react-router-dom';


const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId)
  return (<h1>Product Detail {params.productId}</h1>)
}

export default ProductDetail;
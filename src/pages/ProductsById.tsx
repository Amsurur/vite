import React, { useState } from 'react'
import { products } from './Products'
import { useNavigate, useNavigation, useParams } from 'react-router'
import NotFound from './NotFound'

const ProductsById = () => {
    const {id}=useParams()
    const [product,setProduct]= useState(products.find((e)=>e.id ==id))

    const navigation = useNavigation()
    console.log(navigation);


  return (
    <div>
{
    product?.name
}
    </div>
  )
}

export default ProductsById
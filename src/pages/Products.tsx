import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router'
 export const products= [{
        id:1,
        name:"Iphone 17 pro max"
    },{
        id:2,
        name:"Iphone 18 pro max"
    },
    {
        id:3,
        name:"Iphone 12 pro max"
    },{
        id:4,
        name:"Samsung 25"
    }]
const Products = () => {
    const navigate = useNavigate()
    const navigation = useNavigation()
console.log(navigation);

 
  return (
    <div>
        {
            products.map((e)=>{
                return <div>
                    <h1>{e.name}</h1>
                    <button onClick={()=>navigate(`/products/${e.id}`,{state:"SaLOM"})}>info</button>
                </div>
            })
        }
    </div>
  )
}

export default Products
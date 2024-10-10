import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams()
    const[state,setState] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setState(data)
        })
    },[])
    
  return (
    <div>
      <h4>Product Details</h4>
      <p>{state.price}</p>
      <img src={state.image} alt="" />
    </div>
  )
}

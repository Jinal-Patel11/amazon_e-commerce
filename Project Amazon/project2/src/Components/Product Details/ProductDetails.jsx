import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { myAction } from '../Redux/Action';

export default function ProductDetails() {
  const { type, id } = useParams();
  const [state, setState] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    FetchData();
  }, [id]);

  async function FetchData() {
    const res = await axios.get(`https://amazon-ync6.onrender.com/${type}/${id}`);
    setState(res.data);
  }

  function addtocart(){
    dispatch(myAction(state))
    navigate("/cart")
  }

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={state.image} alt={state.title} className="product-image-details" />
      </div>
      <div className="product-info-container">
        <h2 className="product-title">{state.title}</h2>
        <p className="product-description">{state.description}</p>
        <p className="product-price">₹{state.price}</p>
        <p className="product-delivery">{state.delivery}</p> 
        <button className="add-to-cart-button" onClick={addtocart}>Add to Cart</button>

      </div>
    </div>
  )
}

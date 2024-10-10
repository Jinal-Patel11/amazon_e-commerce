import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Shop.css"
import { Link } from 'react-router-dom';

export default function Shop() {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await axios.get('https://amazon-ync6.onrender.com/data');
    setState(res.data);
  }

  return (
    <div className="shop-container">
      {
        state.map((e, i) => (
          <Link to={`${e.type}`}>
          <div className="shop-item" key={i}>
            <img src={e.image} alt={e.title} />
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <p className="price">₹{e.price}</p>
            <p className="delivery">{e.delivery}</p>
          </div>
          </Link>
        ))
      }
    </div>
  )
}

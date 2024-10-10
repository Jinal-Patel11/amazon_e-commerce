import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Category.css'; 

export default function Category() {
  const { type } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, [type]);

  async function fetchData() {
    const res = await axios.get(`https://amazon-ync6.onrender.com/${type}`);
    setState(res.data);
  }

  return (
    <div className="category-container">
      {state.map((e, i) => {
        return (
          <Link to={`/productDetails/${e.type}/${e.id}`} className="product-card" key={i}>
            <img src={e.image} alt={e.title} className="product-image" style={{width:"100%",height:"200px"}}/>
            <div className="product-info">
              <p className="product-title" style={{fontSize:"16px",marginTop:"10px"}}>{e.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

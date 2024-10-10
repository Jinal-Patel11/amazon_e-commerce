import React from 'react';
import './AmazonLive.css';
// import { Link } from 'react-router-dom';

export default function AmazonLive() {
  const products = [
    {
      id: 1,
      name: "GoSriKi Cotton Blend Women's Kurta Pant",
      price: "₹689.00",
      originalPrice: "₹2599.00",
      discount: "73% off",
      image: 'https://images-na.ssl-images-amazon.com/images/I/41aeS2vEuSL._SX320_QL100_AC_SCLZZZZZZZ_.jpg',
    },
    {
      id: 2,
      name: "Lymio Men Cargo Pants",
      price: "₹649.00",
      originalPrice: "₹4999.00",
      discount: "87% off",
      image: 'https://images-na.ssl-images-amazon.com/images/I/315vXrUoJSL._SX320_QL100_AC_SCLZZZZZZZ_.jpg',
    },
    {
      id: 3,
      name: "SIRIL Women's Georgette Zari Saree",
      price: "₹999.00",
      originalPrice: "₹4996.00",
      discount: "80% off",
      image: 'https://images-na.ssl-images-amazon.com/images/I/41rcCp47kDL._SX240_QL100_AC_SCLZZZZZZZ_.jpg',
    },
    {
      id: 4,
      name: "Arayna Women's Printed Floral Saree",
      price: "₹849.00",
      originalPrice: "₹2499.00",
      discount: "66% off",
      image: 'https://m.media-amazon.com/images/I/81ilqr0TO6L._AC_UL480_FMwebp_QL65_.jpg',
    },
  ];

  return (
    <div className="amazon-live-section mt-3" style={{width:"96.9%",height:"90%",marginLeft:"1.4%",backgroundColor:"white"}}>
      <div className="live-video" style={{marginTop:"29px"}}>
        <h4>Amazon LIVE - Watch Shop LIVE</h4>
        <img src="https://i.ytimg.com/vi/lCOElRk5m8Y/mqdefault.jpg" style={{height:"60vh"}} alt="Live Video" className="live-thumbnail" />
        <div className="overlay">
        <a href="https://www.amazon.in/live/broadcast/67c28c5a-2019-4cd5-8d49-45364d5453a6?ref=cm_sw_al_mef1h4Pa0kIOv">
          <button className="watch-now-btn">Watch now</button></a>
        </div>
      </div>
      <div className="live-products" style={{marginTop:"20px"}}>
        {products.map((product) => (
          <div className="product-card-live" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image-live" />
            <p className="product-name-live">{product.name}</p>
            <p className="product-price-live">
              {product.price} <span className="original-price">{product.originalPrice}</span>
            </p>
            <p className="product-discount">{product.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

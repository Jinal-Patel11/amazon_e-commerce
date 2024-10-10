import React from 'react';
import './OrderSection.css'; 

const OrderSection = () => {
  const products = [
    {
      name: "Cetaphil Face Wash Gentle Skin Cleanser",
      rating: 22457,
      discount: "-12%",
      price: "₹353.00",
      originalPrice: "₹399.00",
      date: "Sat, September 21",
      img: "https://m.media-amazon.com/images/I/51O+J5jnXcL._AC_SY100_.jpg", // Replace with actual image links
    },
    {
      name: "The Derma Co Sunscreen SPF 50",
      rating: 20643,
      discount: "-10%",
      price: "₹268.00",
      originalPrice: "₹299.00",
      date: "Sat, September 21",
      img: "https://m.media-amazon.com/images/I/41v1L8K+11L._AC_SY100_.jpg",
    },
    {
        name: "Garnier Skin Naturals Bright Complete",
        rating: 7914,
        discount: "-37%",
        price: "₹137.00",
        originalPrice: "₹219.00",
        date: "Sat, September 21",
        img: "https://m.media-amazon.com/images/I/51UQbNeJRZL._AC_SY100_.jpg",
      },
      {
        name: "Alps Goodness Rosemary Water Spray",
        rating: 20643,
        discount: "-10%",
        price: "₹268.00",
        originalPrice: "₹299.00",
        date: "Sat, September 21",
        img: "https://m.media-amazon.com/images/I/71aJPOi0-ML._AC_SY100_.jpg",
      },
      {
        name: "Simple Kind To Skin Refreshing Face Wash",
        rating: 19063,
        discount: "-25%",
        price: "₹287.00",
        originalPrice: "₹385.00",
        date: "Sat, September 21",
        img: "https://m.media-amazon.com/images/I/51lV2Pem64L._AC_SY100_.jpg",
      },
      
  ];

  return (
    <div className="order-section">
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div><h2>Your Orders</h2></div>
      {/* <div className="search-container">
        <input type="text" placeholder="Search all orders" />
        <button className="search-btn">Search Orders</button>
      </div> */}
      </div>
      <div className="tabs">
        <button className="tab">Orders</button>
        <button className="tab active">Buy Again</button>
        <button className="tab">Subscribe & Save</button>
        <button className="tab">Not Yet Shipped</button>
        <button className="tab">Cancelled Orders</button>
      </div>
      {/* <div className="search-container">
        <input type="text" placeholder="Search all orders" />
        <button className="search-btn">Search Orders</button>
      </div> */}
      <p style={{fontSize:"14px"}}>There are no recommended items for you to buy again at this time. Check Your Orders for items you previously purchased.</p>
      <div style={{textAlign:"start"}}>
      <h2>Discover</h2>
      <p style={{fontWeight:"bold"}}>Bestsellers in Beauty</p>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} style={{height:"200px"}} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-rating">{product.rating} ratings</p>
              <p className="product-discount">{product.discount}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-original-price">M.R.P.: {product.originalPrice}</p>
              <p className="product-delivery-date">Get it by {product.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSection;

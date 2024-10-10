import React, { useState } from 'react';
import './Clothes.css';

export default function Clothes() {
  const [products] = useState([
    { id: 1, name: 'Hopscotch', description: 'Girls Text Print Bodysuit', price: '$25', imgSrc: 'https://m.media-amazon.com/images/I/61D4QOZ+ajL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'playR', description: "Men's T-Shirt", price: '$20', imgSrc: 'https://m.media-amazon.com/images/I/41uoonXZVhL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'T2F', description: "Boy's Shorts", price: '$15', imgSrc: 'https://m.media-amazon.com/images/I/51EqTGFR06L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'ESSA', description: "Men's 3-Pack Premium Cotton Vests", price: '$30', imgSrc: 'https://m.media-amazon.com/images/I/51S3-rTOPmL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'BULLMER', description: 'Trendy Clothing Set with Shirt ', price: '$25', imgSrc: 'https://m.media-amazon.com/images/I/61JxTwwj-5L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'SOFTSPUN', description: "SOFTSPUN Microfiber Cloth - 4 pcs", price: '$20', imgSrc: 'https://m.media-amazon.com/images/I/81dsWgzXLrL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'GoSriKi', description: "Women's Cotton Blend", price: '$15', imgSrc: 'https://m.media-amazon.com/images/I/61nCJ7mqXFL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Leriya Fashion', description: "Men's Solid Regular Fit T-Shirt", price: '$30', imgSrc: 'https://m.media-amazon.com/images/I/71W+kOgr4aL._AC_UL480_FMwebp_QL65_.jpg' },
  ]);

  return (
    <div className="clothes-page">
      <aside className="sidebar">
        <h3>Delivery Day</h3>
        <ul className='list'>
          <li><input type="checkbox" /> Get It Today</li>
          <li><input type="checkbox" /> Get It by Tomorrow</li>
          <li><input type="checkbox" /> Get It in 2 Days</li>
        </ul>

        <h3 style={{marginRight:"50px"}}>Category</h3>
        <ul className='list'>
          <li>Men's Shirts</li>
          <li>Baby Boys' Clothing</li>
          <li>Women's Dresses & Jumpsuits</li>
          <li>Men's Track Pants</li>
        </ul>

        <h5>Customer Review</h5>
        <ul className='list'>
          <li>★★★★ & Up</li>
        </ul>

        <h3 style={{marginRight:"70px"}}>Brands</h3>
        <ul className='list'>
          <li>Lymio</li>
          <li>Leriya Fashion</li>
          <li>BULLMER</li>
        </ul>
      </aside>

      <div className="product-section">
        <h2>Clothes </h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imgSrc} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

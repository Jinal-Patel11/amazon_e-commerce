import React from 'react';
import { Link } from 'react-router-dom';
import './Thankyou.css'; // Import your custom CSS

const Thankyou = () => {
  const orderNumber = Math.floor(Math.random() * 1000000); // Simulate an order number

  return (
    <div className="thankyou-container">
      <h2>Thank You for Your Order!</h2>
      <p>Your order has been placed successfully.</p>
      <p>Order Number: <strong>{orderNumber}</strong></p>

      <div className="thankyou-actions">
        {/* <Link to="/" className="continue-shopping-btn">Continue Shopping</Link> */}
        <Link to="/" className="view-orders-btn">Back to Homepage</Link>
      </div>
    </div>
  );
};

export default Thankyou;

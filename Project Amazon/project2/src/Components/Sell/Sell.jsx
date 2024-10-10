// import React from 'react';
// import './Sell.css'; // For styling
// import { Link } from 'react-router-dom';

// const Sell = () => {
//   return (
//     <div className="amazon-seller-container">
//       <div className="seller-content">
//         <h1>Become an Amazon.in seller</h1>
//         <p>Pay lesser selling fee* with every order on India's most visited online shopping destination</p>
//         <div className="seller-buttons">
//           <Link to={"/login"}><button className="sign-up-btn">Sign up</button></Link>
//           <button className="lower-fee-btn">Now sell with lower selling fee*</button>
//         </div>
//         <h5 className="disclaimer">Disclaimer</h5>
//       </div>
//       <div className="seller-image">
//         <img src="https://m.media-amazon.com/images/G/31/amazonservices/Go_live_selling_fee_drop_KV.webp" alt="Amazon Seller" />
//       </div>
//     </div>
//   );
// };

// export default Sell;

import React from 'react';
import './Sell.css'; 
import { Link } from 'react-router-dom';

const Sell = () => {
  return (
    <>
    <div className="amazon-seller-container">
      <div className="seller-content">
        <h1>Become an Amazon.in seller</h1>
        <p style={{color:"white"}}>Pay lesser selling fee* with every order on India's most visited online shopping destination</p>
        <div className="seller-buttons">
          <Link to={"/login"}><button className="sign-up-btn">Sign up</button></Link>
          <button className="lower-fee-btn">Now sell with lower selling fee*</button>
        </div>
        <h5 className="disclaimer">Disclaimer</h5>
      </div>
      <div className="seller-image">
        <img src="https://m.media-amazon.com/images/G/31/amazonservices/Go_live_selling_fee_drop_KV.webp" alt=''/>
      </div>
      </div>

      <div className="container">
      <h1>How to sell on Amazon.in?</h1>

      <div className="step-container">
        <div className="step">
          <img src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset1._CB406684202_._SY200_.png" alt="Step 1" />
          <h2>STEP 1: Register your account</h2>
          <p>Register on Amazon with GST/PAN details and an active bank account.</p>
        </div>
        <div className="step">
          <img src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset3._CB406684197_._SY200_.png" alt="Step 2" />
          <h2>STEP 2: Choose storage & shipping</h2>
          <p>Choose storage, packaging, and delivery options.</p>
        </div>
        <div className="step">
          <img src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/HowSellingonAmazonWorks-Template3-Asset2._CB406684202_._SY200_.png" alt="Step 3" />
          <h2>STEP 3: List your products</h2>
          <p>List your products by providing product and brand details.</p>
        </div>
        <div className="step">
          <img src="https://m.media-amazon.com/images/G/31/sellonamazon/experiment/WhySellonAmazon-SecurePayment-Option4._SL1280_FMpng_.png" alt="Step 4" />
          <h2>STEP 4: Complete orders & get paid</h2>
          <p>Deliver orders to customers on time and get paid within 7 days of delivery.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sell;

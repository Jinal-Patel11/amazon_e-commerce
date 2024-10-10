import React, { useState } from 'react';
import './Payment.css'; // Import your custom CSS for styling
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if form is submitting
  const navigate = useNavigate();

  const validateCardNumber = (number) => {
    const cardNumberRegex = /^[0-9]{12}$/;
    return cardNumberRegex.test(number);
  };

  const validateExpiryDate = (date) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; // MM/YY format
    if (!expiryRegex.test(date)) return false;

    const [month, year] = date.split('/');
    const expiryDate = new Date(`20${year}`, month - 1); // Convert MM/YY to full date
    const today = new Date();
    return expiryDate > today; // Check if it's a future date
  };

  const validateCvv = (cvv) => {
    const cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!validateCardNumber(cardNumber)) {
      validationErrors.cardNumber = 'Invalid card number. Must be exactly 12 digits.';
    }
    if (!validateExpiryDate(expiryDate)) {
      validationErrors.expiryDate = 'Invalid expiry date. Must be in MM/YY format and a future date.';
    }
    if (!validateCvv(cvv)) {
      validationErrors.cvv = 'Invalid CVV. Must be 3 digits.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true); // Set submitting to true
      setErrors({}); // Clear errors
      
      // Ensure navigate happens after the alert and form processing
      setTimeout(() => {
        navigate('/thankyou');
      }, 0);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="12"
            placeholder="Enter 12-digit card number"
            required
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            placeholder="Enter 3-digit CVV"
            required
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>

        <button 
          type="submit" 
          className="pay-button" 
          disabled={isSubmitting}> {/* Disable only during submission */}
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Payment;

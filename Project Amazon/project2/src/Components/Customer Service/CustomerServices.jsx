import React from 'react';
import './CustomerService.css';

const CustomerService = () => {
  return (
    <div className="help-section">
      {/* Language and Sale Information Section */}
      <div className="alert-box">
        <p>⚠️ You can view this page in your preferred language by clicking the following links: 
          <a href="#english"> English</a>, <a href="#hindi">हिंदी</a>, <a href="#tamil">தமிழ்</a>, <a href="#telugu">తెలుగు</a>, <a href="#kannada">ಕನ್ನಡ</a>, <a href="#malayalam">Malayalam</a>, <a href="#marathi">मराठी</a>, <a href="#bengali">বাংলা</a>.
        </p>
      </div>
      <div className="alert-box">
        <p>⚠️ For information on our live sale events, including promotions, deals, cashbacks, and quick solutions, refer to our Help page on <a href="#sale-events">Sale Events</a>.</p>
      </div>

      {/* Main Help Section */}
      <h2>Hello. What can we help you with?</h2>
      <div className="help-options">
        <div className="help-card">
          <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png" alt="Your Orders" />
          <h3>Your Orders</h3>
          <p>Track packages<br />Edit or cancel orders</p>
        </div>
        <div className="help-card">
          <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png" alt="Returns and Refunds" />
          <h3>Returns and Refunds</h3>
          <p>Return or exchange items<br />Print return mailing labels</p>
        </div>
        <div className="help-card">
          <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address.png" alt="Manage Addresses" />
          <h3>Manage Addresses</h3>
          <p>Update your addresses<br />Add address, landmark details</p>
        </div>
        <div className="help-card">
          <img src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3.png" alt="Payment Settings" />
          <h3>Payment Settings</h3>
          <p>Add or edit payment methods<br />Manage your bank accounts</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;

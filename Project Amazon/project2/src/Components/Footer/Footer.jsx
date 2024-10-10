import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  
  return (
    <div>
      <footer>
        <Link to="#" onClick={scrollToTop}>
          <div className="foot-pannel1">
            Back to Top
          </div>
        </Link>


        <div className='foot-pannel2 container-fluid'>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <ul>
                <p style={{ color: "white" }}>Get to Know Us</p>
                <a href="##">About Us</a>
                <a href="##">Careers</a>
                <a href="##">Blog</a>
                <a href="##">Press Releases</a>
                <a href="##">Amazon Devices</a>
                <a href="##">Amazon Science</a>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul>
                <p style={{ color: "white" }}>Connect with Us</p>
                <a href="https://www.facebook.com/AmazonIN">Facebook</a>
                <a href="https://x.com/AmazonIN">Twitter</a>
                <a href="https://www.instagram.com/amazondotin/">Instagram</a>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul>
                <p style={{ color: "white" }}>Make Money With Us</p>
                <a href="##">Sell on Amazon</a>
                <a href="##">Sell Under Amazon Accelerator</a>
                <a href="##">Protect and Build Your Brand</a>
                <a href="##">Amazon Global Selling</a>
                <a href="##">Become an Affiliate</a>
                <a href="##">Fulfillment by Amazon</a>
                <a href="##">Advertise Your Product</a>
                <a href="##">Amazon Pay on Merchants</a>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6">
              <ul>
                <p style={{ color: "white" }}>Let Us Help You</p>
                <a href="##">Your Account</a>
                <a href="##">Returns Center</a>
                <a href="##">Recalls and Product Safety Alerts</a>
                <a href="##">100% Purchase Protection</a>
                <a href="##">Amazon App Download</a>
                <a href="##">Help</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-pannel3">
          <div className="text-center">
            <a href="##">Condition of Use</a>
            <a href="##">Notice</a>
            <a href="##">Your Ads Privacy Choices</a>
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


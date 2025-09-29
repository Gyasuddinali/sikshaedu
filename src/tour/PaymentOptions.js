// src/pages/PaymentOptions.js

import React, { useState } from 'react';
import { FaCreditCard, FaGooglePay, FaApplePay, FaPaypal, FaMoneyBillWave, FaQrcode } from 'react-icons/fa';

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (method) => {
    setSelectedOption(method);
    alert(`Selected Payment Method: ${method}`);
    // Here, you can redirect to payment gateway or API call
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Choose Your Payment Method</h2>

      <div className="row g-4 justify-content-center">
        {/* Credit / Debit Card */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary hover-shadow"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('Credit/Debit Card')}
          >
            <FaCreditCard size={40} className="mb-3 text-primary" />
            <h5>Credit / Debit Card</h5>
          </div>
        </div>

        {/* UPI / QR Code */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('UPI / QR Code')}
          >
            <FaQrcode size={40} className="mb-3 text-success" />
            <h5>UPI / QR Code</h5>
          </div>
        </div>

        {/* Google Pay */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('Google Pay')}
          >
            <FaGooglePay size={40} className="mb-3 text-dark" />
            <h5>Google Pay</h5>
          </div>
        </div>

        {/* Apple Pay */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('Apple Pay')}
          >
            <FaApplePay size={40} className="mb-3 text-dark" />
            <h5>Apple Pay</h5>
          </div>
        </div>

        {/* PayPal */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('PayPal')}
          >
            <FaPaypal size={40} className="mb-3 text-info" />
            <h5>PayPal</h5>
          </div>
        </div>

        {/* Cash On Delivery */}
        <div className="col-6 col-md-4">
          <div
            className="card h-100 text-center p-4 border border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => handleSelect('Cash On Delivery')}
          >
            <FaMoneyBillWave size={40} className="mb-3 text-success" />
            <h5>Cash On Delivery</h5>
          </div>
        </div>
      </div>

      {/* Feedback Message */}
      {selectedOption && (
        <div className="alert alert-success text-center mt-4">
          You selected <strong>{selectedOption}</strong> as your payment method.
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;

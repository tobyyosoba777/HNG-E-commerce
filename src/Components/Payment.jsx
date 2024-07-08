// src/Components/Payments.jsx
import React, { useState } from 'react';

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState('Card');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-4xl font-bold">Payment Options</h2>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === 'Card'}
              onChange={handlePaymentChange}
              className="form-radio"
            />
            <span className="ml-2">Card</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank Transfer"
              checked={paymentMethod === 'Bank Transfer'}
              onChange={handlePaymentChange}
              className="form-radio"
            />
            <span className="ml-2">Bank Transfer</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="paymentMethod"
              value="Crypto"
              checked={paymentMethod === 'Crypto'}
              onChange={handlePaymentChange}
              className="form-radio"
            />
            <span className="ml-2">Crypto</span>
          </label>
        </div>

        {paymentMethod === 'Card' && (
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-gray-700">Name on card</label>
                <input
                  type="text"
                  name="cardName"
                  className="w-full p-2 mt-1 bg-gray-300 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Card number</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="w-full p-2 mt-1 bg-gray-300 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">MM/YY</label>
                <input
                  type="text"
                  name="expiry"
                  className="w-full p-2 mt-1 bg-gray-300 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  className="w-full p-2 mt-1 bg-gray-300 border rounded"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Pay Now
            </button>
          </form>
        )}

        {/* Add additional forms for Bank Transfer and Crypto if needed */}
      </div>
    </div>
  );
};

export default Payments;

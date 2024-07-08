// src/Components/Checkout.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted', formData);
    // Additional logic to handle order submission
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-4xl font-bold">Check Out</h2>
        <h2 className='mb-5 ml-5 text-2xl font-normal'>Shipping Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid items-center grid-cols-1 gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">City/State *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code *</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-2 mt-1 bg-gray-300 border rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </form>
        <h3 className="mt-8 text-xl font-bold">Order Summary</h3>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-700">${item.price} x {item.quantity}</p>
              </div>
              <img src={item.image} alt={item.name} className="object-cover w-20 h-20" />
            </li>
          ))}
        </ul>
        <div className="mt-4 text-xl font-semibold">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

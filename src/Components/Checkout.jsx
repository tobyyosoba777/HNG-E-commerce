// src/Components/Checkout.jsx
import { useState } from 'react';

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted', formData);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
      <h3 className="text-xl font-bold mt-8">Order Summary</h3>
      <ul className="space-y-2">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between p-2 border-b">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-700">${item.price} x {item.quantity}</p>
            </div>
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Checkout;

// src/Components/Checkout.jsx
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);
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
      <h2 className="mb-4 text-4xl font-bold">Check Out</h2>
      <h2 className='mb-5 ml-5 text-2xl font-normal'>Shipping Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
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
  );
};

export default Checkout;

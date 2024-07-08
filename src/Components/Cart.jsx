import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Payment from './Payment';

const Cart = () => {
  const { cart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl lg:text-3xl tracking-wide text-stone-900 font-bold mb-4">My Cart</h2>
      <ul className="space-y-4 ">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between  p-2 border-b">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-700">${item.price} x {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
              >
                +
              </button>
            </div>
            <img src={item.image} alt={item.name} className="lg:w-28 lg:h-28 w-16 h-16 object-cover bg-gradient-to-b from-slate-500 to-slate-50 rounded-lg" />
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
      <Payment/>
    </div>
  );
};

export default Cart;

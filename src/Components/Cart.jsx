// src/Components/Cart.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import Payment from './Payment';
import { Trash } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold tracking-wide lg:text-3xl text-stone-900">My Cart</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between p-2 border-b">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-700">${item.price} x {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-700"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-700"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash size={20} />
              </button>
            </div>
            <img src={item.image} alt={item.name} className="object-cover w-16 h-16 rounded-lg lg:w-28 lg:h-28 bg-gradient-to-b from-slate-500 to-slate-50" />
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold">
        Total: ${total.toFixed(2)}
      </div>
      <button
        onClick={() => navigate('/checkout')}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Proceed to Checkout
      </button>
      <Payment />
    </div>
  );
};

export default Cart;

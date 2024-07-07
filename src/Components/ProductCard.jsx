
const ProductCard = ({ product }) => (
  <div className="border rounded-lg shadow-lg p-4 m-4 w-60 text-center">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p className="text-gray-700">{product.description}</p>
    <p className="text-green-500 font-semibold">${product.price}</p>
  </div>
);

export default ProductCard;

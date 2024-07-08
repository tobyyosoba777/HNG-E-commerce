const ProductCard = ({ product }) => (
  <div className="flex flex-wrap justify-center gap-4 md:justify-center md:flex-nowrap md:gap-6 lg:flex lg:flex-wrap lg:gap-4">
    <div className="w-full gap-4 p-4 m-10 rounded-md shadow-md bg-gradient-to-r from-slate-800 to-slate-300 md:w-auto lg:w-1/2">
      <img className="object-cover h-80 w-96" src={product.image} alt={product.name} />
      <div className="mt-2">
        <h2 className="text-xl font-bold text-center">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="font-semibold text-green-500">${product.price}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
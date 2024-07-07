import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="flex flex-wrap justify-around p-4">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;

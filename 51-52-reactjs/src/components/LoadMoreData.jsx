import { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        const uniqueProducts = result.products.filter((newProduct) =>
          !products.some((existingProduct) => newProduct.id === existingProduct.id));
        setProducts((prevData) => [...prevData, ...uniqueProducts]);
      };
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div className="text-center text-lg">Loading data! Please wait...</div>;
  };

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
          className={`px-4 py-2 rounded-lg text-white ${disableButton
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {disableButton ? "No More Products" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;

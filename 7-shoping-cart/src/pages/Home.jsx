import React, { useEffect, useState } from 'react';
import { Circles } from "react-loader-spinner";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className='min-h-screen w-full flex justify-center items-center'>
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-2 md:px-12 p-3'>
          {products && products.length
            ? products.map((productItem) => (
              <Product product={productItem} key={productItem.id} />
            ))
            : null}
        </div>
      )}
    </div>
  )
}

export default Home
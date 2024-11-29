import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();
      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let cpyProducts = [...products];
    setFilteredItems(
      currentSelectedCategory !== ""
        ? cpyProducts.filter(
          (productItem) =>
            productItem.category.toLowerCase() ===
            currentSelectedCategory.toLowerCase()
        )
        : cpyProducts
    );
  }, [currentSelectedCategory]);

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];

  if (loading) {
    return <h3 className="text-center font-bold min-h-screen flex 
    justify-center items-center text-2xl">Fetching the products ! Please wait.....</h3>;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold">Filter Products By Category</h1>
      <div className="w-full flex gap-4 justify-center">
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            onClick={() =>
              setCurrentSelectedCategory(
                currentSelectedCategory !== "" &&
                  currentSelectedCategory === uniqueCategoryItem
                  ? ""
                  : uniqueCategoryItem,
              )
            }
            className={`px-4 py-2 border-2 border-gray-400
             text-white text-xl font-semibold rounded-md
               ${currentSelectedCategory === uniqueCategoryItem ? "bg-slate-800" : "bg-slate-500"}`}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <div className="w-full grid grid-cols-3 gap-3 py-3">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((productItem) => (
            <div
              key={productItem.id}
              className="bg-gray-600 text-white text-xl 
              rounded-md flex flex-col gap-2 p-4"
            >
              <p className="text-center font-semibold truncate">
                {productItem.title}
              </p>
              <button className="bg-gray-800 rounded-md p-2">
                {productItem.category}
              </button>
            </div>
          ))
          : null}
      </div>
    </div>
  );
};

export default App;

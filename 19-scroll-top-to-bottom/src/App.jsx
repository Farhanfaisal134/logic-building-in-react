import React, { useRef } from "react";
import useFetch from "./hook/useFetch";

const App = () => {
  const ref = useRef();
  const { loading, data, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center py-4">
      <header className="w-full text-center">
        <h1 className="text-4xl font-extrabold text-green-400">
          Scroll Navigation Feature
        </h1>
        <p className="text-lg font-medium mt-2 text-gray-300">
          Easily navigate to top or bottom with smooth scrolling
        </p>
      </header>

      <section className="text-center my-5">
        <button
          onClick={handleScrollToBottom}
          className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700 rounded-full 
          transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Scroll to Bottom
        </button>
      </section>

      <main className="w-full bg-gray-700 p-6 my-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-300">
          Product List
        </h2>
        <div className="space-y-2 text-center">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : data && data.length ? (
            data.map((item) => (
              <div key={item.id} className="p-2 bg-gray-800 rounded-md">
                {item.title}
              </div>
            ))
          ) : null}
        </div>
      </main>

      <footer ref={ref} className="w-full text-center mt-5">
        <button
          onClick={handleScrollToTop}
          className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700 rounded-full 
          transition-all duration-200 ease-in-out transform hover:scale-105 mb-4"
        >
          Scroll to Top
        </button>
        <h3 className="text-xl font-bold text-green-300">End of Page</h3>
      </footer>
    </div>
  );
};

export default App;

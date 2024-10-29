import React from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products", {});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Use Fetch Hook</h1>

      {loading && (
        <div className="bg-blue-100 text-blue-700 py-2 px-4 rounded-md mb-4">
          <h2 className="text-xl font-semibold">Pending! Please wait...</h2>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 py-2 px-4 rounded-md mb-4">
          <h3 className="text-xl font-semibold">Error: {error}</h3>
        </div>
      )}

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data && data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg flex items-center">
              <p className="text-lg font-medium text-gray-800">{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
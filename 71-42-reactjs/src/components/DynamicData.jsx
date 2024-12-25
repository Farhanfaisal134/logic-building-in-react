import React, { useState } from 'react';

const DynamicData = () => {
  const [data, setData] = useState("Hello, world!"); // State mein data store kiya

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">{data}</h1> {/* Yahan dynamic data ko display kiya */}
      <button onClick={() => setData("Hello, React!")} className="bg-blue-500 text-white p-2 mt-4 rounded">
        Change Text
      </button>
    </div>
  );
}

export default DynamicData;

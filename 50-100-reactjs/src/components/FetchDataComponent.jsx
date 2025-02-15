import React, { useEffect, useState } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 10).map((item) => (
            <li key={item.id} className="text-lg">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDataComponent;

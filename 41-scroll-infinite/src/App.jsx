import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';

const App = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => res.json())
      .then((arr) => {
        setData((oldData) => [...oldData, ...arr]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [pageNo]);

  return (
    <div className="w-full">
      <Post data={data} setPageNo={setPageNo} />
      {loading && <div className="loader"></div>}
    </div>
  );
};

export default App;

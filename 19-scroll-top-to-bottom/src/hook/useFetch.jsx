import React, { useEffect, useState } from 'react'

const useFetch = (url, option = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) {
        throw new Error(response.statusText)
      };

      const result = await response.json()
      setData(result.products);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`${error} Some Error Occured`)
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchData()
  }, [url])

  return { loading, error, data }
}

export default useFetch
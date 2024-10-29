import React, { useEffect, useState } from 'react'

const useFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetcData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const result = await response.json();
      setData(result.products)
      setError(null)
      setLoading(false)

    } catch (e) {
      setError(`${e} Some Error Occured`)
      setLoading(false)
    }
  };

  useEffect(() => {
    fetcData()
  }, [url]);

  return { data, loading, error };

}

export default useFetch
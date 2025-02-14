import React, { useEffect, useState } from 'react'

const useDebounce = (paramValue, delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState(paramValue);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebounceValue(paramValue)
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [paramValue, delay]);

  return debounceValue;
};

export default useDebounce;
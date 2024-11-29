import React, { useEffect, useRef, useState } from 'react'

const useThrottle = (value, dealy) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const flagRef = useRef(true);

  useEffect(() => {
    if (flagRef.current) {
      setThrottledValue(value)
      flagRef.current = false;
      setTimeout(() => {
        flagRef.current = true;
      }, dealy);
    }
  }, [value, dealy]);

  return throttledValue;
};

export default useThrottle;
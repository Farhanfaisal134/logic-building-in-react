import React, { useEffect, useState } from 'react'
import useThrottle from './hooks/useThrottle';

const App = () => {
  const [top, setTop] = useState(0);
  const throttledValue = useThrottle(top, 1000);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[1000rem] bg-gray-100">
      <div
        className="fixed top-0 left-0 w-full bg-white shadow-lg p-4 border-b border-gray-200"
      >
        <h1 className="text-2xl font-bold text-green-600">Throttling in Action</h1>
        <hr className="my-4 border-green-400" />
        <h2 className="text-lg font-semibold text-blue-500">
          Normal: <span className="font-normal">{top}</span>
        </h2>
        <hr className="my-4 border-blue-400" />
        <h2 className="text-lg font-semibold text-red-500">
          Throttled: <span className="font-normal">{throttledValue}</span>
        </h2>
      </div>
    </div>
  )
};

export default App;
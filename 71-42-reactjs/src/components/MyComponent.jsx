import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    new Promise((res) => setTimeout(() => res(), 5000))
      .then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>MyComponent</div>
  );
};


export default MyComponent;
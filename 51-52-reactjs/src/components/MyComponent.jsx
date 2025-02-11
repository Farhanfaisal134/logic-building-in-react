import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  for (let i = 0; i < 100000000000; i++) { };

  return (
    <div>MyComponent</div>
  );
};

export default MyComponent;
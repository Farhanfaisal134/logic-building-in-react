import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return <WrappedComponent count={count} increment={increment} {...props} />;
  };
};

const ClickCounter = ({ count, increment }) => {
  return (
    <button onClick={increment}>Clicked {count} times</button>
  );
};

export default withCounter(ClickCounter);
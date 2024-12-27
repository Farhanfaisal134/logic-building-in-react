import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      <p>Age: {age}</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Greeting.defaultProps = {
  age: 18,
};

export default Greeting;

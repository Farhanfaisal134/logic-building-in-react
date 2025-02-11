import React, { useEffect } from "react";

const FirstRenderMethod = () => {
  useEffect(() => {
    console.log("Component rendered for the first time!");
  }, []); // Empty dependency array

  return <div className="p-4">Check the console for the log!</div>;
};

export default FirstRenderMethod;

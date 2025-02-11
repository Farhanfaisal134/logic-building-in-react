import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const Parent = () => {
  const [user, setUser] = useState({ name: "Farhan", age: 25 });

  return (
    <AppContext.Provider value={user}>
      <Child />
    </AppContext.Provider>
  );
};

const Child = () => {
  const user = useContext(AppContext);

  return (
    <div className="p-4">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Parent;

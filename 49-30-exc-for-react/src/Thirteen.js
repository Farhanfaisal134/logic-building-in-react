import React, { useEffect, useState } from "react";

export default function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const handleAuthentication = (e) => {
    e.preventDefault();
    if (isRegistered) {
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );
      if (user) {
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
      } else {
        console.log("Login failed.Please check your credential");
        setEmail("");
        setPassword("");
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome , {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"} </h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account? Register now"
              : "Already have an account? Log in!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

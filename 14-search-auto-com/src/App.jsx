import React, { useEffect, useState } from "react";
import Suggestions from "./components/Suggestions";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParams] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [filtredUsers, setFiltredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFiltredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  function handleClick(event) {
    setShowDropDown(false);
    setSearchParams(event.target.innerText);
    setFiltredUsers([]);
  };

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleRemove() {
    setSearchParams("")
    setFiltredUsers([]);
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-[#f9f9f9] flex flex-col justify-center items-center shadow-md rounded-lg px-5 py-8"
    >
      <div className="w-full flex flex-col gap-2">
        {
          loading ? (<h1 className="text-center text-2xl">Loading Data ! Please wait</h1>)
            : (
              <div className="w-full flex border-2">
                <input
                  type="text"
                  value={searchParam}
                  onChange={handleChange}
                  className="w-full px-4 py-3 outline-none"
                />
                {
                  searchParam.length > 0 ? <button className="text-xl px-4 py-2 bg-gray-400 text-white"
                    onClick={handleRemove}>X</button> : null
                }
              </div>
            )
        }
        <div>
          {
            showDropdown && filtredUsers.length > 0 && <Suggestions handleClick={handleClick} data={filtredUsers} />
          }
        </div>
      </div>
    </div>
  );
};

export default App;

import { useEffect, useRef, useState } from "react";
import Pill from "./components/Pill";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);

      if (searchTerm.trim() === "") {
        setSuggestions([]);
        setLoading(false); // Stop loading when search term is empty
        return;
      }

      setLoading(true); // Start loading
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data);
          setLoading(false); // Stop loading after data fetch
        })
        .catch((err) => {
          console.error(err);
          setLoading(false); // Stop loading in case of an error
        });
    };

    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };

  return (
    <div className="flex relative p-3">
      <div className="flex items-center gap-2 p-2 border-2 border-gray-500 rounded-sm w-full" >
        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {
            selectedUsers.map((user) => {
              return (
                <Pill
                  key={user.email}
                  image={user.image}
                  text={`${user.firstName} ${user.lastName}`}
                  onClick={() => handleRemoveUser(user)}
                />
              );
            })
          }
        </div>
        {/* Input field with search suggestions */}
        <div className="w-full">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search For a User..."
            onKeyDown={handleKeyDown}
            className="w-full p-2 border-none focus:outline-none"
          />
          {/* Loading Spinner */}
          {loading && (
            <div className="text-center my-2">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          {/* Search Suggestions */}
          <ul className="absolute max-h-72 top-20 left-2 overflow-y-auto bg-white border border-gray-300 p-0 m-0 list-none">
            {suggestions?.users?.map((user, index) => {
              return !selectedUserSet.has(user.email) ? (
                <li
                  className={`flex items-center gap-2 p-2 cursor-pointer border-b border-gray-300 
                    ${index === activeSuggestion ? "bg-gray-300" : ""}`}
                  key={user.email}
                  onClick={() => handleSelectUser(user)}
                >
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
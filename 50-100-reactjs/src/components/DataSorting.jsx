import React, { useEffect, useState } from 'react'

const DataSorting = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("ascending");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch(`https://dummyjson.com/users`);
      const result = await apiResponse.json();

      if (result && result.users && result.users.length > 0) {
        sort !== "" ? handleSort(result.users) : setUsers(result.users);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleSort(listOfUsers) {
    let cpyUsers = [...listOfUsers];
    if (sort === "ascending") {
      cpyUsers = cpyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? 1 : -1
      );
    } else if (sort === "descending") {
      cpyUsers = cpyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? -1 : 1 // -1 swap nhi karna 1 swap karna han
      );
    }
    setUsers(cpyUsers);
  };

  useEffect(() => {
    handleSort(users);
  }, [sort]);

  return (
    <div className='h-screen w-full bg-gray-800'>
      {loading ? (
        <h1 className='flex justify-center items-center text-xl font-bold text-white'>
          Loading users! Please wait...
        </h1>
      ) : (
        <>
          <div className='text-center py-10'>
            <h1 className='text-2xl font-bold m-6 text-white'>Sort Data</h1>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              name="sort"
              className='text-xl font-bold outline-none'
            >
              <option value='' id=''>
                Please Select Option
              </option>
              <option value="ascending" id="ascending">
                Sort A - Z
              </option>
              <option value="descending" id="descending">
                Sort Z - A
              </option>
            </select>
          </div>
          <div className='max-w-6xl mx-auto flex flex-wrap gap-4 text-slate-300 justify-center'>
            {users && users.length > 0 ? (
              users.map((userItem) => (
                <p key={userItem.id} className='px-3 py-2 bg-gray-700 text-xl font-bold'>
                  {userItem.firstName}
                </p>
              ))
            ) : (
              <p className='text-white text-xl'>No users found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DataSorting;
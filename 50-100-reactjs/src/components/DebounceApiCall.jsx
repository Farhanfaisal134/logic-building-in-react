import React, { useEffect, useState } from 'react';

const DebounceApiCall = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchListOfRecipes(searchParam) {
    try {
      setPending(true);
      setError(null); // Reset error
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchParam}`
      );
      const result = await apiResponse.json();

      if (result?.recipes?.length > 0) {
        setRecipes(result.recipes);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      setError("Something went wrong! Please try again.");
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    if (searchParam.trim() === "") {
      setRecipes([]); // Reset recipes if input is empty
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchListOfRecipes(searchParam);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchParam]);

  return (
    <div className='w-full min-h-screen bg-yellow-500'>
      <div className='pt-14 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Debounce API Call</h1>
        <input
          type='text'
          placeholder='Enter Recipe Name'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className='max-w-3xl mx-auto border-2 border-gray-500 p-2 text-xl font-bold outline-none'
        />
        {pending && <h3 className='text-xl font-bold mt-4'>Pending ! Please wait</h3>}
        {error && <h3 className='text-xl font-bold mt-4 text-red-600'>{error}</h3>}
      </div>
      <div className='max-w-4xl mx-auto text-xl font-bold flex flex-col gap-3 py-10 text-gray-500'>
        {
          recipes.length > 0 ? (
            recipes.map((recipeItem) => (
              <div key={recipeItem.id} className='bg-yellow-300 px-4 py-2'>
                {recipeItem.name}
              </div>
            ))
          ) : (
            !pending && <h3 className='text-center'>No Recipes found! Please try with different search</h3>
          )
        }
      </div>
    </div>
  );
};

export default DebounceApiCall;

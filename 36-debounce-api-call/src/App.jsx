import React, { useEffect, useState } from 'react'
import useDebounce from './hooks/useDebounce';

const App = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  const debounceParamValue = useDebounce(searchParam, 1000);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`,
      );
      const result = await apiResponse.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes([]);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceParamValue]);
  // without debounce hook
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (searchParam.trim() !== "") {
  //       fetchListOfRecipes(searchParam);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timeoutId);
  // }, [searchParam]);

  return (
    <div className='w-full min-h-screen bg-yellow-500'>
      <div className='pt-14 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Debouce API Call</h1>
        <input
          type='text'
          placeholder='Enter Recipe Name'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className='max-w-3xl mx-auto border-2 border-gray-500 p-2 text-xl font-bold outline-none'
        />
        {pending ? <h3 className='text-xl font-bold mt-4'>Pending ! Please wait</h3> : null}
      </div>
      <div className='max-w-6xl mx-auto text-xl font-bold flex flex-col gap-3 py-10 text-gray-500'>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipeItem) => <div
            className='bg-yellow-300 px-4 py-2'
          >{recipeItem.name}</div>)
        ) : (
          <h3>No Recipes found ! Please try with different search</h3>
        )}
      </div>
    </div>
  )
};

export default App;
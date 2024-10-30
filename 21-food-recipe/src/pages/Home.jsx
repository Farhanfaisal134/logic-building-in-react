import React from 'react'
import { GlobalContext } from '../context'
import RecipeItem from '../components/RecipeItem';
import { useContext } from 'react';

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div className='text-center text-xl font-bold'>Loading...Please wait!</div>;

  return (
    <div className='px-8 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        recipeList && recipeList.length > 0
          ? recipeList.map((item) => <RecipeItem item={item} />)
          : (
            <div className='grid col-span-2 lg:col-span-4 place-items-center'>
              <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                Nothing to show. Please search something
              </p>
            </div>
          )
      }
    </div>
  )
}

export default Home
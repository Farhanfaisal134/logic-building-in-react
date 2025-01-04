import React from 'react'
import { GlobalContext } from '../context';
import { useContext } from 'react';
import RecipeItem from '../components/RecipeItem';

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-3 px-8 mt-8'>
      {
        favoritesList && favoritesList.length > 0
          ? (
            favoritesList.map((item) => <RecipeItem item={item} />)
          ) : (
            <div className='grid col-span-2 lg:col-span-3'>
              <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                Nothing is added in favorites.
              </p>
            </div>
          )
      }
    </div>
  )
};

export default Favorites;
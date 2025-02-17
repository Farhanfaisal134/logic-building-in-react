import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context';

const RecipeItem = ({ item }) => {
  const { handleAddToFavorite, favoritesList } = useContext(GlobalContext);

  return (
    <div className='text-center sm:text-start flex flex-col justify-center overflow-hidden p-5 bg-white/75 
    shadow-xl gap-5 border-2 rounded-2xl border-white'>
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>

      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <div className='flex flex-col gap-2 lg:flex-row justify-center items-center'>
          <Link to={`/recipe-item/${item?.id}`}>
            <button className="px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3
             inline-block shadow-md bg-black text-white py-2">Recipe Details</button>
          </Link>
          <button onClick={() => handleAddToFavorite(item)}
            className="px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3
             inline-block shadow-md bg-black text-white py-2">
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (ele) => ele.id === item?.id)
              !== -1
              ? "Remove from favorites"
              : "Add to favorites"
            }
          </button>
        </div>
      </div>
    </div >
  )
}

export default RecipeItem
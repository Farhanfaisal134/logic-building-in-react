import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';
import { useEffect } from 'react';

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);


  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json()

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    };
    getRecipeDetails()
  }, [id]);

  return (
    <div className='px-4 py-4 md:px-12 md:py-8 grid lg:grid-cols-2 gap-10 w-full' key={recipeDetailsData?.recipe?.id}>
      <div className="h-96 overflow-hidden rounded-xl group">
        <img
          src={recipeDetailsData?.recipe?.image_url}
          className="max-w-80 md:w-full mx-auto h-full object-cover block group-hover:scale-105 duration-300"
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>

        <h3 className="font-bold text-2xl text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>

        <div>
          <button onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3
             inline-block shadow-md bg-black text-white">
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id)
              !== -1
              ? "Remove from favorites"
              : "Add to favorites"
            }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.slice(0, 5).map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
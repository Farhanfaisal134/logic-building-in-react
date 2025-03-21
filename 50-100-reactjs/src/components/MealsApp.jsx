import React, { useEffect, useState, useCallback } from 'react';
import { useMealsStore } from '../store/store';

const MealApp = () => {
  const { meals, fetchMeals, setSearchQuery, searchQuery, isLoading } = useMealsStore();
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(debouncedQuery);
    }, 1000);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  const handleChange = useCallback((e) => {
    setDebouncedQuery(e.target.value);
  }, []);

  const filteredMeals = meals.filter((meal) => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Seafood Recipes</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={debouncedQuery}
          onChange={handleChange}
          className="w-full max-w-md px-4 py-2 border border-blue-400 rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-blue-600 shadow-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          isLoading ? (
            <div className="col-span-full flex justify-center items-center min-h-[200px]">
              <div className="w-8 h-8 rounded-full border-dashed border-4 border-blue-600 animate-spin" />
            </div>
          ) : filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{meal.strMeal}</h2>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No meals found</p>
          )
        }
      </div>
    </div>
  );
};

export default MealApp;

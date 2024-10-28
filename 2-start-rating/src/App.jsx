import { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-col">
      <div className="flex gap-3">
        {[...Array(10)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              size={40}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              className={`cursor-pointer transition-all duration-300 ${index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
                }`}
            />
          );
        })}
      </div>

      <span className="ml-4 text-2xl font-semibold text-gray-600">
        {rating} / 10
      </span>
    </div>
  );
};

export default App;

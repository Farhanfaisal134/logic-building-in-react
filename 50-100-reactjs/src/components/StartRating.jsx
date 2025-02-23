import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StartRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-gray-900 text-white h-screen">
      <div className="flex justify-center items-center gap-2">
        {
          [...Array(10)].map((_, index) => {
            index += 1;
            return (
              <FaStar className={`w-20 h-20 cursor-pointer ${index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)} />
            )
          })
        }
      </div>
      <div className="text-2xl font-bold">{rating} / 10</div>
    </div>
  )
};

export default StartRating;

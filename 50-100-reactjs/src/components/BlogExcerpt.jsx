import React, { useState } from 'react'

const BlogExcerpt = (
  {
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies...",
    limit = 50
  }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white max-w-md mx-auto">
      <p className="text-gray-800">
        {expanded ? text : text.slice(0, limit) + (text.length > limit ? "..." : "")}
      </p>
      {text.length > limit && (
        <button
          onClick={toggleReadMore}
          className="mt-2 text-blue-600 hover:underline focus:outline-none"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}

export default BlogExcerpt
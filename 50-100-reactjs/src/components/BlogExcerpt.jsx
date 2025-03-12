import React, { useState } from 'react'

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies..."
const BlogExcerpt = ({ limit = 20 }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='flex justify-center items-center bg-gray-900 text-white h-screen'>
      <div className='p-4 bg-gray-800 flex gap-1 shadow-md w-full max-w-3xl mx-auto'>
        <p>{expand ? text : text.length > limit ? text.slice(0, limit) + "..." : text}</p>
        {
          text.length > limit && <button onClick={() => setExpand(!expand)}>{expand ? "See Less" : "See More"}</button>
        }
      </div>
    </div>
  )
};

export default BlogExcerpt;
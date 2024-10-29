import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import useOutsideClick from './hook/useOutsideClick';

const App = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);

  //useOutsideClick(ref, () => setShowContent(false))

  useEffect(() => {
    function listner(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowContent(false)
      };
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };

  }, [showContent]);


  return (
    <div className='w-full min-h-screen flex justify-center items-center p-5 bg-blue-800'>
      {
        showContent
          ? (
            <div ref={ref}
              className='flex flex-col gap-3 max-w-5xl mx-auto bg-blue-500 text-white text-xl text-center py-4 px-6 rounded-lg'
            >
              <h1>This is a random content</h1>
              <p>
                Please click outside of this to close this. It won't close if you
                click inside of this content
              </p>
            </div>
          )
          : (
            <button
              onClick={() => setShowContent(!showContent)}
              className='px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-2xl'>Show Content</button>
          )
      }
    </div>
  )
}

export default App
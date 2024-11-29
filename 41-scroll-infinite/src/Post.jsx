import { useEffect, useState } from 'react';

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNo((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const lastImage = document.querySelector('.image-wrapper:last-child');
    if (lastImage) {
      observer.observe(lastImage);
    }

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
    };
  }, [data]);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="image-wrapper relative w-full h-48 bg-gray-200 rounded-md overflow-hidden"
        >
          <img
            className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
            src={item.download_url}
            alt="Post"
            onLoad={(e) => e.target.classList.remove('opacity-0')}
          />
        </div>
      ))}
    </div>
  );
}

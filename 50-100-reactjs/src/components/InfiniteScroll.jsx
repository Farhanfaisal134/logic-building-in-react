import { useState, useEffect } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
        const result = await res.json();
        if (result) {
          const uniqueImages = result.filter((newImage) => !data.some((existingImage) => newImage.id === existingImage.id));
          setData((prev) => [...prev, ...uniqueImages]);
        };
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false)
      };
    };

    fetchImages();
  }, [pageNo]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((prev) => prev + 1);
      };
    }, { threshold: 0.5 });

    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);

    return () => {
      if (lastImage) observer.unobserve(lastImage);
      observer.disconnect();
    };
  }, [data]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Infinite Scroll Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          data.map((item) => (
            <img
              key={item.id}
              src={item.download_url}
              alt={`Random from Picsum ${item.id}`}
              loading="lazy"
              className="image-post w-full h-64 object-cover rounded-lg shadow-md 
            hover:shadow-xl transition-shadow duration-300"
            />
          ))
        }
      </div>
      {
        loading && (
          <div className="flex justify-center items-center mt-8">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        )
      }
    </div>
  );
}

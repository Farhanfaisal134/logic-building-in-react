import { useState, useEffect } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`);
        const arr = await res.json();
        setData((oldData) => [...oldData, ...arr]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
      setLoadingNext(false);
    };

    fetchData();
  }, [pageNo]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && !loadingNext) {
        setLoadingNext(true);
        setPageNo((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingNext]);

  return (
    <div className="p-4">

      <div className="grid grid-cols-3 gap-4">
        {
          data.map((item) => (
            <div key={item.id} className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                src={item.download_url}
                alt="Random"
                loading="lazy"
                onLoad={(e) => e.target.classList.add("opacity-100")}
              />
            </div>
          ))
        }

        {
          loading &&
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
          ))
        }
      </div>

      {
        loadingNext && (
          <div className="flex justify-center items-center mt-6">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )
      }
    </div>
  );
}

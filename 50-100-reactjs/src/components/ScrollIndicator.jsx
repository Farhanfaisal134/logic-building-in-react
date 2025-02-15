import React, { useEffect, useState } from 'react'

const ScrollIndicator = ({ url = "https://dummyjson.com/products?limit=100" }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products)
        setLoading(false)
      };
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  };

  useEffect(() => {
    if (url !== '') fetchData(url)
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <>
      <div className='fixed w-full bg-[#075b0a] text-white z-10 top-0 text-center'>
        <h1 className='m-4'>Custom Scroll Indicator</h1>
        <div className='w-full h-[10px] bg-[#aaf900]'>
          <div className={`bg-[#8b02b5] h-[10px] w-0`} style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div >

      <div className='mt-5 text-center'>
        {
          data && data.length > 0
            ? data.map((dataItem, idx) => <p className='w-full p-3' key={idx}>{dataItem.title}</p>)
            :
            null
        }
      </div>
    </>
  );
};

export default ScrollIndicator;
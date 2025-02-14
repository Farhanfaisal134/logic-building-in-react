import React, { useEffect, useState } from 'react'

const App = () => {
  const [postIDs, setPostIDs] = useState([]);
  const [postMetadata, setPostMetadata] = useState([]);

  const getFormattedDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formtedDate = `${month}/${day}/${year}`;
    return formtedDate;
  };

  const getJobTitle = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 1) {
      const part1 = arr[0];
      const part2 = arr[1];
      return `${part1} ${part2}`;
    };
    return "N/A";
  };

  const getJobInfo = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    if (arr.length > 2) {
      return arr[2];
    };
    return "N/A";
  };

  async function fetchPostMetadata(ids) {
    const apiCalls = ids.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      return getData(url);
    });

    const results = await Promise.all(apiCalls);
    if (results.length) {
      const newArr = results.map((item) => {
        const obj = {
          jobTitle: getJobTitle(item.title),
          jobInfo: getJobInfo(item.title),
          date: getFormattedDate(item.time),
          url: item.url ? item.url :
            `https://news.ycombinator.com/item?id=${item.id}`
        }
        return obj;
      });

      let copyPostMetadata = [...postMetadata];
      copyPostMetadata = [...copyPostMetadata, ...newArr];
      setPostMetadata(copyPostMetadata)
    };
  };

  async function getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error: ', err);
    };
  };

  async function fetchPostIDs() {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    const data = await getData(url);
    const ids = data.splice(0, 9);
    setPostIDs(data);
    fetchPostMetadata(ids);
  };

  useEffect(() => {
    fetchPostIDs()
  }, []);

  const handleLoadMore = () => {
    const copyIds = [...postIDs];
    if (copyIds.length > 0) {
      const ids = copyIds.splice(0, 6)
      fetchPostMetadata(ids);
      setPostIDs(copyIds);
    };
  };

  return (
    <div className="p-4 md:p-8 w-full min-h-screen bg-gray-800 text-center">
      <h1 className='text-2xl font-bold text-center text-white'>Job Board</h1>
      <div className='w-full max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 py-4'>
        {
          postMetadata?.length === 0 ?
            <div className='text-xl font-semibold text-white col-span-3'>Loading...</div> :
            postMetadata.map((post, idx) => (
              <a key={idx} className='bg-gray-200 px-3 py-2 rounded-md text-center flex flex-col gap-2 shadow-md'
                href={post.url}
                target='_blank'
              >
                <h3 className='text-xl font-bold'>{post.jobTitle}</h3>
                <h4 className='font-semibold'>{post.jobInfo}</h4>
                <p className='date'>{post.date}</p>
              </a>
            ))
        }
      </div>
      <button className='px-3 py-1 text-white bg-blue-500 rounded-sm' onClick={handleLoadMore}>Load More</button>
    </div>
  )
};

export default App;
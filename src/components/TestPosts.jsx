import React, { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
  const [postData, setPostData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://dev.tedooo.com/feed.json");
      const responseData = await response.json();
      setPostData(responseData.data);
    };

    const fillDisplay = () => {
      setDisplayData(postData.slice(0, offset));
    };

    fetchPosts();
    fillDisplay();
  }, [postData, offset]);

  const handleLoadMore = () => {
    setOffset(offset + 6);
  };

  return (
    <div className='mx-auto mt-10 max-w-7xl bg-white'>
      {displayData.map((data) => (
        <Post key={data.id} data={data} />
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default Posts;

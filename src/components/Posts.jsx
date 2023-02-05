import React, { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
  const [postData, setPostData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    if (postData.length === 0) {
      const fetchPosts = async () => {
        const response = await fetch("https://dev.tedooo.com/feed.json");
        const responseData = await response.json();
        setPostData(responseData.data);
      };
      fetchPosts();
    }

    const fillDisplay = () => {
      setDisplayData(postData.slice(0, offset));
    };

    fillDisplay();
  }, [postData, offset]);

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        (3.99 / 4) * document.documentElement.offsetHeight
      ) {
        setOffset(offset + 6);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [offset]);

  return (
    <div className='mx-auto mt-10 max-w-7xl bg-white'>
      {displayData.map((data) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Posts;

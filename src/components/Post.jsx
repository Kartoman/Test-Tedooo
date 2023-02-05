import React, { useEffect, useState } from "react";
import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

function Post({ data }) {
  const { ref, inView } = useInView({ threshold: 0 });
  const [impressionFired, setImpressionFired] = useState(false);

  useEffect(() => {
    const fireImpression = () => {
      const impressionURL = `https://www.tedooo.com/?userId=${data.userId}&itemId=${data.id}`;
      console.log(
        "The application will fire an impression on every feed item that the user watches"
      );
    };

    if (inView && !impressionFired) {
      fireImpression();
      setImpressionFired(true);
    }
  }, [inView, impressionFired, data]);

  return (
    <>
      <div className='relative flex flex-col px-20 py-5'>
        <img
          src={data.avatar}
          alt='user_avater'
          className='absolute left-6 h-12 w-12 rounded-full'
        />
        <p className='text-lg font-bold'>{data.username}</p>
        <p className='text-sm font-bold text-blue-300'>{data.shopName}</p>
      </div>
      <div>
        <p className='px-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab mollitia
          consequatur blanditiis aliquid neque non doloremque, quis nulla.
          Dolores nulla consectetur ipsa ducimus, a animi quaerat dolore ut
          natus at!
        </p>
        <div className='max-h-2xl mx-auto flex max-w-2xl'>
          {data.images?.length === 1 &&
            data.images.map((img, i) => (
              <img key={i} src={img} alt='user_images' className='mx-auto' />
            ))}
        </div>

        <div className='max-h-2xl mx-auto flex max-w-2xl flex-row'>
          {data.images?.length === 2 &&
            data.images.map((img, i) => (
              <div>
                <img
                  key={i}
                  src={img}
                  alt='user_images'
                  className='mx-auto pt-4'
                />
              </div>
            ))}
        </div>

        <div className='max-h-2xl mx-auto flex max-w-2xl flex-row'>
          {data.images?.length > 2 &&
            data.images.slice(0, 2).map((img, i) => (
              <div>
                <img
                  key={i}
                  src={img}
                  alt='user_images'
                  className='mx-auto pt-4'
                />
              </div>
            ))}
        </div>

        <div className='mx-32 flex justify-between'>
          <div className='flex'>
            <img
              src={require("../assets/like.png")}
              alt='like_logo'
              className='h-6 w-6 rounded-full'
            />
            <p className='mx-2'>{data.likes} Likes</p>
          </div>
          <p>{data.comments} Comments</p>
        </div>
        <hr className='my-5 mx-auto max-w-5xl border border-gray-300' />
        <div ref={ref} className='flex justify-around'>
          <p className={`flex ${data.didLike && "text-blue-400"}`}>
            <span>
              <HandThumbUpIcon className='h-5 w-5' />
            </span>
            Like
          </p>
          <p className='flex'>
            <span>
              <ChatBubbleLeftIcon className='h-5 w-5' />
            </span>
            Comment
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;

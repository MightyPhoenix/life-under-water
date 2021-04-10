import React from "react";
import { FcLike } from "react-icons/fc";

const FeedItem = ({ feed }) => {
  return (
    <div className="container rounded bg-white shadow max-w-sm mx-auto m-4">
      <header className="p-4">
        <img
          className="w-10 h-10 m-1 mr-3 float-left rounded-full"
          src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
          alt="..."
        />
        <p className="text-md font-bold ">{`John Doe`}</p>
        {/* <p className="text-sm text-gray-600 ">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(feed.post_date)}</p> */}
        <p className="text-sm text-gray-600 ">{feed.post_date}</p>
      </header>
      <section>
        <img src={feed.image} className="" alt="..." />
        <p className="text-sm text-gray-600 p-4">{feed.post}</p>
      </section>
      <footer className="p-4 items-center">
        <FcLike className="float-left mb-4 mr-2" />
        <p className="font-bold text-sm">{feed.claps}</p>
      </footer>
    </div>
  );
};

export default FeedItem;

import React, { useState, useEffect } from "react";
import fire from "../../../config/Fire";
import FeedItem from "./FeedItem";
import { Modal } from "../../Util/Modal";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [modal, setModal] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getFeeds();
  }, [feeds]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await fire.firestore().collection("feed").add(formData);
    setModal(false);
  };

  const getFeeds = async () => {
    let feedData = [];
    const feedDocs = await fire.firestore().collection("feed").get();
    await feedDocs.forEach((doc) => feedData.push(doc.data()));
    setFeeds(feedData);
  };
  return (
    <>
      <div className="flex flex-row px-auto py-auto">
        {feeds.map((feed, key) => {
          return <FeedItem feed={feed} key={key} />;
        })}
      </div>

      <button
        onClick={() => setModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-w-xs ml-auto relative right-0 bottom-0"
      >
        Create New Post
      </button>
      <Modal
        isOpen={modal}
        close={() => setModal(false)}
        title={`Create New Post`}
      >
        <h1>What would you like to post today?</h1>
        <div className={"my-4 mx-auto"} style={{ width: "50%" }}>
          <ul className="flex cursor-pointer">
            <li
              onClick={() => setTabs(0)}
              className={`py-2 px-6 rounded-t-lg ${
                tabs === 0
                  ? `bg-blue-500 text-white`
                  : `bg-gray-200 text-gray-500`
              }`}
            >
              Text
            </li>
            <li
              onClick={() => setTabs(1)}
              className={`py-2 px-6 rounded-t-lg ${
                tabs === 1
                  ? `bg-blue-500 text-white`
                  : `bg-gray-200 text-gray-500`
              }`}
            >
              Picture
            </li>
          </ul>
        </div>
        {tabs === 0 && (
          <form className="mx-auto" style={{ width: "50%" }}>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="name" className="bg-white text-gray-600 px-1">
                    Type here&nbsp;
                  </label>
                </p>
              </div>
              <p>
                <textarea
                  id="name"
                  autoComplete="false"
                  tabIndex={0}
                  type="text"
                  className="py-4 px-1 text-gray-900 outline-none block h-full w-full"
                  onChange={(e) =>
                    setFormData({
                      ...FormData,
                      claps: 10,
                      image:
                        "https://upload.wikimedia.org/wikipedia/commons/f/fc/Varkala.jpg",
                      post: e.target.value,
                      post_date: new Date().toLocaleString(),
                    })
                  }
                />
              </p>
            </div>
            <button
              className="py-2 my-2 px-4 bg-green-500 rounded text-white"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              Post
            </button>
          </form>
        )}
      </Modal>
    </>
  );
};

export default Feed;

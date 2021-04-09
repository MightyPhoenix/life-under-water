import React, { useState, useEffect } from "react";
import fire from "../../../config/Fire";
import FeedItem from "./FeedItem";
import { Modal } from "../../Util/Modal";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    const feedDocs = await fire
      .firestore()
      .collection("feed")
      .doc("feeds")
      .get();
    const feedData = await feedDocs.data();
    setFeeds(feedData?.feeds);
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
      </Modal>
    </>
  );
};

export default Feed;

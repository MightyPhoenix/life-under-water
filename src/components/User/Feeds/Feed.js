import React, { useState, useEffect } from "react";
import fire from "../../../config/Fire";
import FeedItem from "./FeedItem";

const Feed = () => {

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        
        getFeeds();
    }, [])

    const getFeeds = async () => {
        const feedDocs = await fire.firestore().collection("feed").doc("feeds").get();
        const feedData = await feedDocs.data();
        setFeeds(feedData?.feeds);
    }
    return (
        <div className="flex flex-row px-auto py-auto">
            {
                feeds.map((feed,key) => {
                    return(
                        <FeedItem feed={feed} key={key} />
                    )
                }
                    
                )
            }
        </div>
    )
}

export default Feed;
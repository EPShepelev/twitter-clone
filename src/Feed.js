import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}
    </div>
  );
}

export default Feed;

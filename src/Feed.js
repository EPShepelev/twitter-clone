import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Shepelev Evgeniy"
        userName="shepeLEV"
        verified={true}
        text="Hi! It's work! Its realy work!"
        avatar="https://vjoy.cc/wp-content/uploads/2020/10/5bdaa2f76dee907eb45e3e446b50ce4e.jpg"
        image="https://www.dailyhaha.com/_pics/llama_wants_some_cormbreab.jpg"
        // src="https://festivalsherpa-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/camel.jpg"
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;

import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweeMessage] = useState("");

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://vjoy.cc/wp-content/uploads/2020/10/5bdaa2f76dee907eb45e3e446b50ce4e.jpg" />
          <input
            onChange={(e) => setTweeMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          ></input>
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL (optional)"
          type="text"
        ></input>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

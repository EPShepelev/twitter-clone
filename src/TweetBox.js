import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://vjoy.cc/wp-content/uploads/2020/10/5bdaa2f76dee907eb45e3e446b50ce4e.jpg" />
          <input placeholder="what's happening?"></input>
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://vjoy.cc/wp-content/uploads/2020/10/5bdaa2f76dee907eb45e3e446b50ce4e.jpg" />
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import { Avatar } from "@material-ui/core";
import VerifedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://vjoy.cc/wp-content/uploads/2020/10/5bdaa2f76dee907eb45e3e446b50ce4e.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {" "}
              Calav Miraxmetov
              <span>
                <VerifedUserIcon className="post__bage" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Some text for testing...</p>
          </div>
        </div>
        <img
          // src="https://festivalsherpa-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/camel.jpg"
          src="https://www.dailyhaha.com/_pics/llama_wants_some_cormbreab.jpg"
          alt="funny"
        ></img>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;

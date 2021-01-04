import React from "react";
import { Avatar } from "@material-ui/core";
import VerifedUserIcon from "@material-ui/icons/VerifiedUser";
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
          src="https://img-cdn.brainberries.co/wp-content/uploads/2015/10/Snapping-Selfies-with-Wild-Animals-Is-a-New-Trend-20.jpg"
          alt="funny"
        ></img>
      </div>
    </div>
  );
}

export default Post;

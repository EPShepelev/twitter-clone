import React from "react";
import "./Wigets.css";
import {
  TwitterTimeLineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
      </div>
    </div>
  );
}

export default Widgets;

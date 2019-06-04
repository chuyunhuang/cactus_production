import React from "react";
import { Link } from "react-router-dom";
import "./style/sidenavbar.css";

//icon images
import ExploreIcon from "./image/explore.png";
import NotificationIcon from "./image/notification.png";
import MypageIcon from "./image/mypage.png";
import EditIcon from "./image/edit.png";
import FollowerIcon from "./image/follower.png";
import FollowingIcon from "./image/following.png";

const SideNavBar = props => {
  console.log(props);
  return (
    <div>
      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/newsfeed"
        >
          <div className="single-img">
            <img className="img-logo" src={ExploreIcon} alt="icon" />
          </div>
          <div className="title">Explore Newsfeed</div>
        </Link>
      </div>
      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/mypage"
        >
          <div className="single-img">
            <img className="img-logo" src={MypageIcon} alt="icon" />
          </div>
          <div className="title">View My Page</div>
        </Link>
      </div>

      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/editprofile"
        >
          <div className="single-img">
            <img className="img-logo" src={EditIcon} alt="icon" />
          </div>
          <div className="title">Edit My Profile</div>
        </Link>
      </div>

      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/createpost"
        >
          <div className="single-img">
            <img className="img-logo" src={NotificationIcon} alt="icon" />
          </div>
          <div className="title">Create New Post</div>
        </Link>
      </div>

      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/myfollower"
        >
          <div className="single-img">
            <img className="img-logo" src={FollowerIcon} alt="icon" />
          </div>
          <div className="title">My Followers</div>
        </Link>
      </div>

      <div className="single">
        <Link
          className="single-category"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center"
          }}
          to="/following"
        >
          <div className="single-img">
            <img className="img-logo" src={FollowingIcon} alt="icon" />
          </div>
          <div className="title">My Followings</div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;

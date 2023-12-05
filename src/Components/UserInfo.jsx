import React from "react";
import { FaStar, FaThumbsUp, FaEye, FaHeart, FaGem } from "react-icons/fa";

import { BsPatchCheckFill } from "react-icons/bs";

import userImg from "../assets/haxxor.jpg";
import coverImg from "../assets/cover.jpeg";
import "./UserInfo.css";

function UserInfo() {
  return (
    <>
      <img
        className="img-fluid"
        src={coverImg}
        alt="Cover"
        style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
      />

      <div className="user_info">
        <div className="user_img">
          <img className="img_style" src={userImg} alt="Profile" />
        </div>
        <div className="user_content">
          <div className="flex1">
            <h1>Devesh Pandey</h1>
            <FaGem style={{ color: "#553f8a" }} />
            <BsPatchCheckFill style={{ color: "#60e69e" }} />
          </div>
          <div className="flex2">
            <div>
              <span className="number">6482</span>
              <p className="text">Followers</p>
            </div>
            <div>
              <span className="number">245</span>
              <p className="text">Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="profile-bio">
          <div className="text-lg" style={{ fontSize: "20px" }}>
            I am a Technophile! What's Next ?{" "}
          </div>
          <a
            href="https://github.com/deveshp007"
            className="text-primary font-weight-bold text-sm github-link"
            style={{ fontSize: "18px" }}
          >
            https://github.com/deveshp007
          </a>
        </div>

        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <FaStar className="ml-1" style={{ color: "#5fbbc4" }} />
            <span className="text-xs ml-1">125</span>
          </div>
          <div className="d-flex align-items-center ml-4">
            <FaThumbsUp className="ml-1" style={{ color: "#efac1e" }} />
            <span className="text-xs ml-1">12</span>
          </div>
          <div className="d-flex align-items-center ml-4">
            <FaEye className="ml-1" style={{ color: "#7f7e7f" }} />
            <span className="text-xs ml-1">57.8K</span>
          </div>
          <div className="d-flex align-items-center ml-4">
            <FaHeart className="ml-1" style={{ color: "#c12457" }} />
            <span className="text-xs ml-1">26.0K</span>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default UserInfo;

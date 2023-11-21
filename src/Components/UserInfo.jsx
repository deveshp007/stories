import React from "react";
import {
  FaStar,
  FaThumbsUp,
  FaEye,
  FaHeart,
  FaGem,
} from "react-icons/fa";

import {BsPatchCheckFill} from "react-icons/bs";

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
      <div className="container">
        <div className="row">
          <img
            className="img-fluid rounded-circle border border-secondary mt-3"
            src={userImg}
            alt="Profile"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "180px",
              maxHeight: "180px",
              objectFit: "cover",
              transform: "translate(-0%, -40%)",
              zIndex: 1,
            }}
          />

          <div className="col mt-3">
            <div className="font-weight-bold text-lg">
              <div className="d-flex align-items-center">
                <div className="mr-2" style={{ fontSize: "22px", fontFamily: "sans-serif" }}>
                  Devesh Pandey
                </div>
                <FaGem className="ml-1" style={{ color: "#553f8a" }} />
                <BsPatchCheckFill
                  className="ml-1"
                  style={{ color: "#60e69e" }}
                />
              </div>
            </div>

            <div className="d-flex justify-content">
              <div className="text-dark">
                <div
                  className="font-weight-bold text-lg box-txt"
                  style={{ width: "80px" }}
                >
                  6482
                </div>
                <div className="text-sm txt">Followers</div>
              </div>
              <div className="text-dark" style={{ marginLeft: "30px" }}>
                <div
                  className="font-weight-bold text-lg box-txt"
                  style={{ width: "80px" }}
                >
                  245
                </div>
                <div className="text-sm txt">Following</div>
              </div>
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

import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./Posts.css";


const Posts = () => {
  const posts = [
    {
      title: "A changing world order",
      postcontent:
        "The world is changing at feverish pace. Friends, colleagues, and everyone engaged in knowledge work, are beginning to sense this, including ...",
      liked: true,
      date: "August 2",
      readingtime: "2",
      views: "102",
      category: "musing",
    },
    {
      title: "India v/s Australia",
      postcontent:
        "Think about it - this cricket series was akin to therapy.\n \n Laying our childhood trauma up top, working with it slowly and surely over two m...",
      liked: true,
      date: "January 21",
      readingtime: "1",
      views: "156",
      category: "thoughts",
    },
    {
      title: "Write to build",
      postcontent:
        "Writing is the first step to create: \n\n - stories \n - products \n - companies",
      liked: true,
      date: "November 18",
      readingtime: "1",
      views: "228",
      category: "thoughts",
    },
    {
      title: "Android 14 New features",
      postcontent:
        "Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features.",
      liked: true,
      date: "November 21",
      readingtime: "2",
      views: "314",
      category: "updates",
    },
  ];

  return (
    <>
      <div className="container">
        <br></br>
        <h4 className="custom-heading"> 134 Posts</h4>
        <hr className="custom-hr" />
        {posts.map((post, index) => {
          return (
            <div className="border-bottom py-4" key={index}>
              <div className="d-flex justify-content-between mb-2">
                <div
                  className="font-weight-bold text-lg"
                  style={{ fontSize: "20px" }}
                >
                  {post.title}
                </div>
                <div className="d-flex align-items-center">
                  <FaThumbsUp
                    className={`cursor-pointer text-sm`}
                    style={{ color: "#FFD700" }}
                  />
                </div>
              </div>
              <div className="my-6">
                <div style={{ whiteSpace: "pre-line" }}>{post.postcontent}</div>
              </div>
              <br />
              <div className="d-flex flex-column flex-md-row justify-content-between text-md-end">
                <div className="font-weight-semibold" style={{ color: "grey" }}>
                  <span style={{ color: "teal" }}>{post.category}</span> by{" "}
                  {"@deveshp007"}
                </div>
                <div style={{ color: "grey" }}>
                  {post.date} &middot; {post.readingtime} mins Read &middot;{" "}
                  {post.views} Views
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;

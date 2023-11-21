import React from 'react'
import logo from '../assets/ttt.svg'

function TopBar() {
  return (
    <div
      className="navbar text-white px-4 py-3 d-flex justify-content-between"
      style={{ backgroundColor: "#000" }}
    >
      <div className="d-flex align-items-center">
        <img src={logo} alt="logo" className="mr-2" />
        <span className="font-weight-bold border-left border-warning ml-2 px-2" style={{fontFamily: "sans-serif"}}>
          S T O R I E S
        </span>
      </div>
      <button className="btn btn-warning font-weight-bold px-4 py-2">
        Courses
      </button>
    </div>
  );
}

export default TopBar;
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./home.css"




export default function Home() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="homeDiv">
      <div className="container">
        <div className="red">
          <h1>Star Wars Lookup </h1>
        </div>
        <div className="red">
          <h4>Begin your Star Wars journey to a long time ago in a galaxy far, far away... </h4>
        </div>
        <div className="green">
          <nav>
          <NavLink
            className="homeNavLink"
            to="people"> Click to Start !
          </NavLink>
          </nav>
        </div>
      </div>
    </div>
  )

}
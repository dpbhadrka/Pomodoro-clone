import React from "react";
import PomodoroLogo from "./PomoDoroLogo.png";
import AboutIcon from "./about_icon.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="projectName">
          <img className="logo" src={PomodoroLogo} alt="logo" />
          <div id="projectTitle">
            Pomodoro<span>Clone</span>
          </div>
        </div>
        <div className="about">
          <a id="aboutLink" href="#information">
            About
          </a>
          <a id="aboutIcon" href="#information">
            <img src={AboutIcon} alt="About" />
          </a>
        </div>
      </div>
    </>
  );
}

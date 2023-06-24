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
            Pomodoro<span id="sortname">Clone</span>
          </div>
        </div>
        <div className="about">
          <a href="#information">About</a>
          <a id="aboutIcon" href="./aboutME" target="_blank">
            <img src={AboutIcon} alt="About" />
          </a>
        </div>
      </div>
    </>
  );
}

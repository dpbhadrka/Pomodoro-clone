import React, { useState } from "react";
import "./pomodoroTimer.css";

export default function PomodoroTimer() {
  function formatTime(time) {
    return time.toString().padStart(2, "0");
  }
  const [minutes, setMinutes] = useState(25);
  const [originalMinutes, setOriginalMinutes] = useState(25);
  const [intervalId, setIntervalId] = useState();
  const [quote, setQuote] = useState("#Time to focus!");
  const [seconds, setSeconds] = useState(formatTime(0));
  const [buttonName, setButtonName] = useState("START");
  const [activeButton, setActiveButton] = useState("1");
  let tempSeconds = 60;
  let tempMinutes = originalMinutes;
  let removeInterval;

  //Run below function when user click on Pomodoro option.
  const pomodoro = () => {
    clearInterval(intervalId);
    setOriginalMinutes(25);
    setMinutes(25);
    setSeconds(formatTime(0));
    setButtonName("START");
    setQuote("#Time to focus!");
    setActiveButton("1");
  };

  //Run below function when user click on Short break option.
  const shortBreak = () => {
    clearInterval(intervalId);
    setOriginalMinutes(formatTime(5));
    setSeconds(formatTime(0));
    setMinutes(formatTime(5));
    setButtonName("START");
    setQuote("#Time for a break!!");
    setActiveButton("2");
  };

  //Run below function when user click on Long break option.
  const longBreak = () => {
    clearInterval(intervalId);
    setOriginalMinutes(15);
    setSeconds(formatTime(0));
    // tempMinutes = 15;
    setMinutes(15);
    setButtonName("START");
    setQuote("#Time for a break!!");
    setActiveButton("3");
  };

  //Call below function when click on start button
  const mainFunction = (originalMinutes, originalSeconds) => {
    tempSeconds = originalSeconds;
    tempMinutes = originalMinutes;
    console.log("In the mainFunction : " + originalMinutes);

    if (buttonName === "START") {
      setButtonName("PAUSE");
      removeInterval = setInterval(startTimer, 1000);
      setIntervalId(removeInterval);
    } else {
      setMinutes(originalMinutes);
      setButtonName("START");
      clearInterval(intervalId);
    }
  };

  //This is the function which decrement the timer.
  const startTimer = () => {
    if (tempSeconds != 0) {
      tempSeconds -= 1;
      setSeconds(formatTime(tempSeconds));
    } else if (tempSeconds == 0 && tempMinutes > 0) {
      console.log("Tempminutes" + tempMinutes);
      tempSeconds = 59;
      setSeconds(formatTime(tempSeconds));
      tempMinutes -= 1;
      setMinutes(formatTime(tempMinutes));
    } else {
      tempMinutes = originalMinutes;
      setMinutes(formatTime(originalMinutes));
      setButtonName("START");
      clearInterval(removeInterval);
    }
  };

  // The actual thing which is going to return when PomodoroTimer component is called.
  return (
    <>
      <div className="pomodoroTechnique">
        <div className="options">
          <a
            id="firstOption"
            className={activeButton === "1" ? "active" : " "}
            onClick={pomodoro}
          >
            Pomo<span>doro </span>
          </a>
          <a
            id="secondOption"
            className={activeButton === "2" ? "active" : " "}
            onClick={shortBreak}
          >
            Short <span>Break</span>
          </a>
          <a
            id="thirdOption"
            className={activeButton === "3" ? "active" : " "}
            onClick={longBreak}
          >
            Long <span>Break</span>
          </a>
        </div>
        <div className="timer">
          <span id="minutes">{minutes}</span>
          <span id="colon"> : </span>
          <span id="seconds">{seconds}</span>
        </div>
        <div className="startButton">
          <button
            className="clickMe"
            onClick={() => {
              mainFunction(minutes, seconds);
            }}
          >
            {buttonName}
          </button>
          <button
            className="clickMe"
            onClick={() => {
              clearInterval(intervalId);
              setMinutes(originalMinutes);
              tempMinutes = originalMinutes;
              setButtonName("START");
              setSeconds(formatTime(0));
            }}
          >
            RESET
          </button>
        </div>
      </div>
      <div className="quote" id="quote">
        {quote}
      </div>
    </>
  );
}

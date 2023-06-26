import React from "react";
import "./information.css";

export default function Information() {
  return (
    <>
      <div className="information" id="information">
        <div className="aboutPomodoro">
          <div className="title">
            <h1>Increasing your productivity with an online Pomodoro timer</h1>
          </div>
          <div>
            <h2>What is Pomofocus?</h2>
            <p>
              Pomofocus is a mobile and desktop browser-based pomodoro timer
              that can be customised. This app's goal is to assist you in
              maintaining attention when working on any assignment, whether it's
              coding, writing, or studying. The
              <a
                href="https://francescocirillo.com/pages/pomodoro-technique"
                target="_blank"
              >
                Pomodoro Technique
              </a>
              , a time management technique created by Francesco Cirillo, served
              as the basis for this software.
            </p>
          </div>
          <div>
            <h2>What is Pomodoro Technique?</h2>
            <p>
              The Pomodoro Technique is created by Francesco Cirillo for a more
              productive way to work and study. The technique uses a timer to
              break down work into intervals, traditionally 25 minutes in
              length, separated by short breaks. Each interval is known as a
              pomodoro, from the Italian word for 'tomato', after the
              tomato-shaped kitchen timer that Cirillo used as a university
              student. -
              <a
                href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                target="_blank"
              >
                Wikipedia
              </a>
            </p>
          </div>
          <div>
            <h2>How to use the Pomodoro Timer?</h2>

            <ol>
              <li>
                <strong>Add tasks</strong> to work on today.
              </li>
              <li>
                <strong>Select a task</strong> to work on.
              </li>
              <li>
                <strong>Start timer</strong> and focus on the task for 25
                minutes.
              </li>
              <li>
                <strong>Take a break</strong> for 5 minutes when the alarm ring.
              </li>
              <li>
                <strong>Iterate</strong> 3-5 until you finish the tasks.
              </li>
            </ol>
          </div>
          <div>
            <h2>Basic Features</h2>

            <ul>
              <li>
                <strong> Estimate Finish Time: </strong> Get an estimate of the
                time required to complete your daily tasks.
              </li>
              <li>
                <strong> Add Templates:</strong> Save your repetitive tasks as
                templates and add them with just one click.
              </li>
              <li>
                <strong>Visual Reports:</strong> See how much time you've
                focused each day, week, and month.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

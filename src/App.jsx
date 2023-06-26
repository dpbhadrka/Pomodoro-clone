import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import PomodoroTimer from "./component/PomodoroTimer/PomodoroTimer";
import Information from "./component/Information/Information";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <PomodoroTimer />
      <Information />
      <Footer />
    </>
  );
}

export default App;

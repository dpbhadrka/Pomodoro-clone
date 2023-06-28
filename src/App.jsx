import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import PomodoroTimer from "./component/PomodoroTimer/PomodoroTimer";
import ToDoList from "./component/ToDoList/TakeTask/ToDoList";
import Information from "./component/Information/Information";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <PomodoroTimer />
      <ToDoList />
      <Information />
      <Footer />
    </>
  );
}

export default App;

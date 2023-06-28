import React, { useState } from "react";
import "./toDoList.css";
import addTaskIcon from "./Task-add-icon.png";
import DisplayTaskList from "../DisplayTask/DisplayTaskList";

export default function ToDoList() {
  const [taketask, setTakeTask] = useState(false);
  const [taskItem, setTaskItem] = useState("");
  const [taskList, setTaskList] = useState([]);

  const taskInput = (event) => {
    setTaskItem(event.target.value);
    console.log(taskItem);
  };

  const addTask = () => {
    if (taskItem.trim() != "") {
      setTaskList((previousTask) => {
        return [...previousTask, taskItem];
      });
      console.log(taskList);
      setTaskItem("");
    } else {
      alert("Please Enter Somthing....");
    }
  };

  const cancle = () => {
    setTakeTask(false);
  };

  const deleteTaskItem = (key) => {
    setTaskList((previousTask) => {
      return previousTask.filter((task, index) => {
        return index != key;
      });
    });
  };
  return (
    <>
      <div className="toDoList">
        <div
          className="takeTask"
          onClick={() => {
            setTakeTask(true);
          }}
          style={{ display: taketask ? "none" : "flex" }}
        >
          <img src={addTaskIcon} alt="Task-add-icon" height="30" width="30" />
          Add Task
        </div>

        <div
          className="addTask takeTask"
          style={{ display: taketask ? "flex" : "none" }}
        >
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add your task..."
            autoComplete="off"
            value={taskItem}
            onChange={taskInput}
          />

          <div className="taskButton">
            <button onClick={addTask}>Add</button>
            <button onClick={cancle}>Cancel</button>
          </div>
        </div>

        <div className="displayAllTask">
          {taskList.map((taskItem, i) => {
            return (
              <div key={i}>
                <DisplayTaskList
                  taskItem={taskItem}
                  index={i}
                  deleteTask={deleteTaskItem}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

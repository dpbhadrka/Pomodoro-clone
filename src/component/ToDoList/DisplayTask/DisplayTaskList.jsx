import React from "react";
import "./displayTask.css";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

export default function DisplayTaskList(props) {
  const deleteItem = () => {
    props.deleteTask(props.index);
  };
  return (
    <>
      <div className="displayTask">
        <div className="displayTaskHeader">
          <h2>Task: {props.index + 1}</h2>
          <span onClick={deleteItem}>
            <HighlightOffSharpIcon fontSize="large" />
          </span>
        </div>
        <p>{props.taskItem}</p>
      </div>
    </>
  );
}

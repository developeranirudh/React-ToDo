import React from "react";
import "./App.css";

const List = (props) => {
  return (
    <li className="list">
      {props.element}
      <span className="hel me-2">
        <i
          onClick={() => {
            props.deletee(props.id);
          }}
          className="fas fa-trash"
        ></i>
        <i
          onClick={() => {
            props.editTask(props.id);
          }}
          className="fas fa-edit"
        >
        </i>
        <i
          onClick={() => {
            props.moveUp(props.id);
          }}
        className=" fas fa-arrow-up"
        >
        </i>
        <i
          onClick={() => {
            props.moveDown(props.id);
          }}
          className="fas fa-arrow-down"
        >
        </i>
      </span>
    </li>
  );
};

export default List;

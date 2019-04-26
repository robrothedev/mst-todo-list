import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <ToDoItem item={item} key={idx} />
      ))}
    </ul>
  );
};

export default ToDoList;

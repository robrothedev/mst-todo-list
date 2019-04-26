import React from "react";

const ToggleDone = ({ item }) => {
  return (
    <input type="checkbox" onChange={item.toggleDone} checked={item.done} />
  );
};

export default ToggleDone;

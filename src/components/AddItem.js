import React from "react";

const AddItem = ({ store }) => {
  let onKeyPress = e => {
    if (e.key === "Enter") {
      store.addItem({ name: e.target.value });
      e.target.value = "";
    }
  };
  return (
    <input type="text" placeholder="Add new item..." onKeyPress={onKeyPress} />
  );
};

export default AddItem;

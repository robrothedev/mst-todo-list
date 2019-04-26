import React from "react";

const ItemEditor = ({ item, parentCallBack }) => {
  let onKeyPress = e => {
    item.changeName(e.target.value);

    if (e.key === "Enter") {
      e.target.value = "";
      parentCallBack();
    }
  };

  return <input type="text" defaultValue={item.name} onKeyPress={onKeyPress} />;
};

export default ItemEditor;

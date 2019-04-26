import React from "react";

const RemoveItem = ({ item }) => {
  return (
    <span className="btnRemove" onClick={item.delete}>
      &times;
    </span>
  );
};

export default RemoveItem;

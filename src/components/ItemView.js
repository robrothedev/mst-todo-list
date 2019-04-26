import React from "react";
import ToggleDone from "./ToggleDone";
import RemoveItem from "./RemoveItem";

const ItemView = ({ item, parentCallBack }) => {
  return (
    <React.Fragment>
      <ToggleDone item={item} />
      <div className="todo-item-name" onClick={parentCallBack}>
        {item.name}
      </div>
      <RemoveItem item={item} />
    </React.Fragment>
  );
};

export default ItemView;

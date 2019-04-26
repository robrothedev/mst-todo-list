import React from "react";
import { observer } from "mobx-react";

const DoneItems = ({ items }) => {
  return (
    <div>
      <h4>Done Items ({items.length})</h4>
      <ul className="done-item-list">
        {items.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default observer(DoneItems);

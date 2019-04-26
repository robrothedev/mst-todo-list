import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "./Store";
import ItemData from "./ItemData";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import DoneItems from "./components/DoneItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = Store.create({ items: ItemData });
  }

  render() {
    let { items } = this.store;
    let doneItems = this.store.doneItems();
    let showDone = doneItems.length > 0 ? true : false;

    return (
      <div>
        <AddItem store={this.store} />
        <ToDoList items={items} />
        {showDone && <DoneItems items={doneItems} />}
      </div>
    );
  }
}

export default observer(App);

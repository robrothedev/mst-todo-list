import React, { Component } from "react";
import ItemView from "./ItemView";
import ItemEditor from "./ItemEditor";

class ToDoItem extends Component {
  state = { editing: false };

  /**
   * Toggles state to show/hide editor and item view
   */

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    let { item } = this.props;
    let { editing } = this.state;

    return (
      <li>
        {!editing && (
          <ItemView item={item} parentCallBack={this.toggleEditing} />
        )}

        {editing && (
          <ItemEditor item={item} parentCallBack={this.toggleEditing} />
        )}
      </li>
    );
  }
}

export default ToDoItem;

import { types, getParent } from "mobx-state-tree";

const ItemModel = types

  .model("ItemModel", {
    id: types.number,
    name: types.string,
    done: types.optional(types.boolean, false)
  })

  .actions(self => ({
    /**
     * Change model name
     *
     * @param {String} newName
     */

    changeName(newName) {
      self.name = newName;
    },

    /**
     * Toggle boolean flag for item done property
     */

    toggleDone() {
      self.done = !self.done;
    },

    /**
     * Call the parent to remove the item from the list
     */

    delete() {
      getParent(self, 2).removeItem(self);
    }
  }));

export default ItemModel;

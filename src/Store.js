import { types, destroy } from "mobx-state-tree";
import ItemModel from "./ItemModel";

const Store = types

  .model("Store", {
    items: types.optional(types.array(ItemModel), [])
  })

  .actions(self => ({
    /**
     * Adds a new item model to the items list
     *
     * @param {Object} item
     */

    addItem(item) {
      // add timestamp id
      item.id = new Date().getTime();

      // push object to array
      self.items.push(item);
    },

    /**
     * Removes an item model from the items list
     *
     * @param {Object}
     */

    removeItem(item) {
      // mst wrapper for splice
      destroy(item);
    }
  }))

  .views(self => ({
    /**
     * Return items that are done
     *
     * @return {Array}
     */

    doneItems() {
      return self.items.filter(i => i.done === true);
    }
  }));

export default Store;

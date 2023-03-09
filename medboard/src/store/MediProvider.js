import React, { useReducer } from "react";
import MediContext from "./medicine-context";
const defaultMedState = {
  items: [],
};
const medReducer = (state, action) => {
  //for adding itmes
  if (action.type === "ADD") {
    console.log("in action ", action.item);
    const existingMedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingMedItem = state.items[existingMedItemIndex];
    let updatedItems;
    if (existingMedItemIndex) {
      //id items exist already
      const updateItem = {
        ...existingMedItem,
        amount: existingMedItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingMedItem] = updateItem;
    } else {
      //adding new item for the first time
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems };
  } //Add action end here
  return defaultMedState;
};
const MediProvider = (porps) => {
  const [medState, dispatchMedAction] = useReducer(medReducer, defaultMedState);
  const addItemHandler = (item) => {
    dispatchMedAction({ type: "ADD", item: item });
  };
  const mediContext = {
    items: medState.items,
    addItem: addItemHandler,
  };

  return (
    <MediContext.Provider value={mediContext}>
      {porps.children}
    </MediContext.Provider>
  );
};

export default MediProvider;

import React, { useReducer } from "react";
import MediContext from "./medicine-context";
const defaultMedState = {
  items: [],
};
const medReducer = (state, action) => {
  //for adding itmes
  if (action.type === "ADD") {
    const existingMedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log("exit", existingMedItemIndex);
    const existingMedItem = state.items[existingMedItemIndex];
    let updatedItems;
    if (existingMedItemIndex !== -1) {
      //id items exist already
      console.log("yes there", existingMedItem);
      const updateItem = {
        ...existingMedItem,
        quantity: existingMedItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingMedItemIndex] = updateItem;
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
    console.log("add handler", item.quantity);
    dispatchMedAction({ type: "ADD", item: item });
  };
  const mediContext = {
    items: medState.items,
    addItem: addItemHandler,
  };
  console.log("check ", mediContext.items);
  return (
    <MediContext.Provider value={mediContext}>
      {porps.children}
    </MediContext.Provider>
  );
};

export default MediProvider;

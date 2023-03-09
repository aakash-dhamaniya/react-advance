import React from "react";
const MediContext = React.createContext({
  items: [],
  addItem: (item) => {},
});
export default MediContext;

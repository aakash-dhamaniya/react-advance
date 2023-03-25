import { useState } from "react";
import Header from "./components/layout/Header";
import AddMedicne from "./components/medicines/AddMedicne";
import Update from "./components/medicines/Update";
import MediProvider from "./store/MediProvider";
let arry = [];
function App() {
  const [updataShow, setUpdateShow] = useState(false);

  const showUpdateHandler = (name, description, price, quantity) => {
    setUpdateShow(true);
    console.log(name, description, price, quantity);
    arry[0] = name;
    arry[1] = description;
    arry[2] = price;
    arry[3] = quantity;
  };
  const hideCartHandler = () => {
    setUpdateShow(false);
  };
  console.log(arry);
  return (
    <MediProvider>
      {updataShow && <Update onClose={hideCartHandler} item={arry} />}
      <Header />
      <main>
        <AddMedicne onShowUpdate={showUpdateHandler} />
      </main>
    </MediProvider>
  );
}

export default App;

import Header from "./components/layout/Header";
import AddMedicne from "./components/medicines/AddMedicne";
import MediProvider from "./store/MediProvider";

function App() {
  return (
    <MediProvider>
      <Header></Header>
      <main>
        <AddMedicne />
      </main>
    </MediProvider>
  );
}

export default App;

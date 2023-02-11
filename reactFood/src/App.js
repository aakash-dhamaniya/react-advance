import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Cart></Cart>
      <Header />
      <Meals />
    </>
  );
}

export default App;

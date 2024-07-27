import "./App.css";
import Filter from "./component/filter/Filter";
import ProductList from "./component/ProductList/ProductList";

function App() {
  return (
    <>
      <div className="container">
        <Filter />
        <ProductList />
      </div>
    </>
  );
}

export default App;

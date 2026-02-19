import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessgage from "./components/ErrorMessage";
function App() {
  let fooditems = ["Dal","Dal", "Roti", "GreenVegetable", "Milk", "Ghee"];
  // if (fooditems.length === 0) {
  //   return <h2>I am still hungry</h2>;
  // }
  //jsx automatically removes falsy values in logical operator way of conditioning
  return (
    <React.Fragment>
      <h1>Healthy-Foods</h1>
      <ErrorMessgage />
      <FoodItems  items={fooditems}/>
    </React.Fragment>
  );
}
export default App;

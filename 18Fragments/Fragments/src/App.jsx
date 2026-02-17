import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let fooditems = ["Dal", "GreenVegetable", "Roti", "salad", "Milk"];

  return (
    <React.Fragment>
      <h1>Healthy-Foods</h1>
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  //let foodItems = [];
  let foodItems = ["sabji", "green veges", "Roti", "Salad", "Milk", "ghee"];

  // by if else
  // if (foodItems.length === 0) {
  //   return <h3>I AM STILL HUNGRY</h3>;
  // }

  // by ternary operator
  // let emptyMessage = foodItems.length === 0 ? <h3>i AM STILL hungry</h3> : null;

  return (
    <>
    <Container>
      <h1>Healthy Foods</h1>
      {/* by logical and  */}
      {/* {foodItems.length === 0 && <h3>i AM STILL hungry</h3>} */}
      <ErrorMessage items={foodItems} />
      <FoodInput/>
      <FoodItems items={foodItems} />
    </Container>
    {/* <Container>
      <p>Above food list is the healhty food list </p>
    </Container> */}
    </>
  );
}
export default App;

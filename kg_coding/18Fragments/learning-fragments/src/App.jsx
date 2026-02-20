import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  let foodItems = ['dal','green veges','Roti','Salad','Milk','ghee']

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item , index)=> <li className="list-group-item" key = {index}>{item}</li>)}
        
      </ul>
    </>
  );
}
export default App;

import Item from "./Items";
function FoodItems({items}) {
 
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item key = {index} foodItem = {item}/>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;

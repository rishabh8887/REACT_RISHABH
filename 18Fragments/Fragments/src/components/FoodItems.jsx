import Item from "./Item";

function FoodItems({ items }) {
  // console.log(items);

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item key={index} fooditems={item}></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;

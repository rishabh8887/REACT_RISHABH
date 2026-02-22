import Item from "./Items";
function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item
            key={index}
            foodItem={item}
            handleBuyButtonClicked={() => console.log(`${item} bought`)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;

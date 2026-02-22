import { useState } from "react";
import Item from "./Items";
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item
            key={index}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButtonClicked={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;

import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} Being bought `);
  };
  return (
    <>
      <li className={`list-group-item  ${styles["rb-item"]}`}>
        <span className={`${styles["rb-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info `}
          onClick={(event) => handleBuyButtonClicked(event)}
        >
          BUY
        </button>
      </li>
    </>
  );
};
export default Item;

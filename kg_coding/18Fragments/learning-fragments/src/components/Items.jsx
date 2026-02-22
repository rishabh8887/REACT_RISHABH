import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButtonClicked }) => {
  return (
    <>
      <li className={`list-group-item  ${styles["rb-item"]}`}>
        <span className={`${styles["rb-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info `}
          onClick={handleBuyButtonClicked}
        >
          BUY
        </button>
      </li>
    </>
  );
};
export default Item;

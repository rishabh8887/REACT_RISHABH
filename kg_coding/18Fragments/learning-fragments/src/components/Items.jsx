import styles from "./Item.module.css"
const Item = ({foodItem}) => {
  
  return (
    <>
      <li className={`list-group-item  ${styles['rb-item']}`}>
        <span className={`${styles['rb-span']}`}>{foodItem}</span>
      </li>
    </>
  );
};
export default Item;

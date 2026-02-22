import styles from "./FoodInput.module.css";
const FoodInput = ({handelOnChange}) => {
  
  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter Food Item Here"
        onChange={handelOnChange}
      />
    </>
  );
};
export default FoodInput;

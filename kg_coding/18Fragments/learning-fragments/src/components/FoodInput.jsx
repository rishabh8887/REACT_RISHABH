import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handelOnChange = (event) => {
    console.log(event.target.value);
  };
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

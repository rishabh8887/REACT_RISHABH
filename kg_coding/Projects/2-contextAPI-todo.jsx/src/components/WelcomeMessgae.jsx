import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessgae = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>ENJOY YOUR DAY</p>
  );
};
export default WelcomeMessgae;

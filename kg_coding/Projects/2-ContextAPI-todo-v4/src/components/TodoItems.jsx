import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItems-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles.container}>
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;

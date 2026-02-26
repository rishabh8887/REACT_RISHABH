import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.container}>
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick}/>
        ))}
      </div>
    </>
  );
};
export default TodoItems;

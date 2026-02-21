import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item,index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessgae from "./components/WelcomeMessgae";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessgae />
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}
export default App;

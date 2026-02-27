import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMessgae from "./components/WelcomeMessgae";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currValue, action) => {
  let newTodoItems = currValue;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currValue,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currValue.filter(
      (item) => item.name !== action.payload.todoItemName,
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
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

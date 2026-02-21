import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "04/10/2023",
    },
    {
      name: "studye",
      dueDate: "till the  completion",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}
export default App;

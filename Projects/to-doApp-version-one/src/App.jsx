import AddToDo from "./componenets/AddToDo";
import AppName from "./componenets/AppName";
import WorkList from "./componenets/WorkList";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddToDo />
      <WorkList />
    </center>
  );
}

export default App;

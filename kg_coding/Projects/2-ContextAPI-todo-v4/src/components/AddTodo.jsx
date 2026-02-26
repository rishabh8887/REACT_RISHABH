import { useContext } from "react";
import { useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItems-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, todoDate);
  };

  return (
    <>
      <div className="container text-center ">
        <form
          className="row rb-row"
          action=""
          onSubmit={handleAddButtonClicked}
        >
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button
              onSubmit={handleAddButtonClicked}
              className="btn btn-success rb-button"
            >
              <MdFormatListBulletedAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;

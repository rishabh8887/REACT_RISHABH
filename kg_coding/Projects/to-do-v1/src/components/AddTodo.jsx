function AddTodo() {
  return (
    <>
      <div className="container text-center ">
        <div className="row rb-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success rb-button">
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;

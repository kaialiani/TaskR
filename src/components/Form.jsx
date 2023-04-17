function Form(props) {
  function submit(e) {
    e.preventDefault();
    e.target.elements.task.value;
    props.addTask(e.target.elements.task.value);
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="form_task">Task</label>
      <input required type="text" name="task" id="form_task" />
      <button>Add Task</button>
    </form>
  );
}

export default Form;

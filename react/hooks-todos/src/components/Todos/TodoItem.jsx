const TodoItem = (props) => {
    const {
        id,
        text,
        isCompleted,
    } = props.todo;
    const {onToggle, onDelete} = props;

    return (
      <div className="todo-item">
        {/* <h3>TodoItem</h3> */}
        <input type="checkbox" onChange={onToggle} />
        <span className={isCompleted ? 'completed' : ''}>{text}</span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
}

export default TodoItem;
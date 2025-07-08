import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { 
    todos,
    onToggle,
    onDelete
} = props;
  return (
    <ul className="todo-list">
      {/* <h2>TodoList</h2> */}
      {
        todos.length > 0 ? (
            todos.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                onToggle={() => onToggle(todo.id)}
                onDelete={() => onDelete(todo.id)}
                ></TodoItem>
            ))
        ) : (
            <p>暂无待办事项</p>
        )
      }
    </ul>
  );
};

export default TodoList;

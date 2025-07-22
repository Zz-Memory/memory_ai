import {
    useTodoStore
} from "@/store/todos";

const TodoList = () => {
    const {
        todoList,
        addTodo,
        toggleTodo,
        deleteTodo
    } = useTodoStore();
    return (
        <>
            <h2>待办列表</h2>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="请输入待办事项"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </>
    )
}
export default TodoList

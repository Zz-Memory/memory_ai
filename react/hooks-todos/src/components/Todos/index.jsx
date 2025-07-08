// 状态hook
import { useState } from "react"; // react函数式编程，提供了好用的以use开头的函数
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  // 数据流管理
  // 父组件持有管理数据，通过props传递数据，子组件通过 props 自定义函数通知父组件修改数据
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "打豆豆",
      isCompleted: false,
    },
    {
      id: 2,
      text: "算法比赛",
      isCompleted: false,
    },
  ]);

  //   新增todo
  const addTodo = (text) => {
    // setTodo
    // 数据状态是对象的时候
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isComplete: false,
      },
    ]);
  };

  const onToggle = (id) => {
    // todos 数组找到id为传入参数的对象，修改isCompleted属性：isCompleted -> !isCompleted
    // 响应式？ 返回一个全新的todos map
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="app">
      <h1>Todos</h1>
      {/* 自定义事件 */}
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      ></TodoList>
    </div>
  );
};

export default Todos;

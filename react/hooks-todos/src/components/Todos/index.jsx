// 状态hook
import { useState } from "react"; // react函数式编程，提供了好用的以use开头的函数
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = (props) => {
  // 数据流管理
  // 父组件持有管理数据，通过props传递数据，子组件通过 props 自定义函数通知父组件修改数据
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "打豆豆",
      isCompleted: false,
    },
    {
      id: 2,
      title: "算法比赛",
      isCompleted: false,
    },
  ]);

//   新增todo
const addTodo = () => {
    // setTodo

}
  return (
    <div className='app'>
      <h1>Todos</h1>
      {/* 自定义事件 */}
      <TodoForm 
        onAddTodo={addTodo}
      ></TodoForm>
      <TodoList
        todos={todos}
      ></TodoList>
    </div>
  );
};

export default Todos;

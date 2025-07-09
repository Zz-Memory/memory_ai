// 状态hook
import { useEffect, useState } from "react"; // react函数式编程，提供了好用的以use开头的函数
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodos from "@/hooks/useTodos";

const Todos = () => {
  // 数据流管理
  // 父组件持有管理数据，通过props传递数据，子组件通过 props 自定义函数通知父组件修改数据
  const {
    todos,
    addTodo,
    onToggle,
    onDelete,
  } = useTodos();

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

import { useState, useEffect } from "react";

const useTodos = () => {
    // const [todos, setTodos] = useState([
    //   {
    //     id: 1,
    //     text: "打豆豆",
    //     isCompleted: false,
    //   },
    //   {
    //     id: 2,
    //     text: "算法比赛",
    //     isCompleted: false,
    //   },
    // ]);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  //   新增todo
  const addTodo = (text) => {
    // setTodo
    // 数据状态是对象的时候
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isCompleted: false,
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

  useEffect(() => {
    // 接收字符串
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return {
    todos,
    setTodos,
    addTodo,
    onToggle,
    onDelete,
  };
};

export default useTodos;

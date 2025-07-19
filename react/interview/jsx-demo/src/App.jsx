import { useState, createElement } from "react";
import "./App.css";

function App() {
  const element1 = <h1 className="title">Hello world</h1>;
  const element2 = createElement("h1", { className: "title" }, "Hello world");

  const [todos, setTodos] = useState([
    { id: 1, title: "学习 React" },
    { id: 2, title: "完成项目" },
    { id: 3, title: "参加会议" },
  ]);
  return (
    <>
      {element1}
      {element2}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <ul>
        {todos.map((todo) => 
          createElement("li", { key: todo.id }, todo.title)
          )}
      </ul>
    </>
  );
}

export default App;

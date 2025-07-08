// 私有状态
import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  // 数据
  // props 参数数据
  // state 私有的数据
  // 单向数据流
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = text.trim(); // dry don't repeat yourself（不要重复自己）
    if (!text.trim()) {
      return;
    }
    onAddTodo(text.trim());
    setText(""); // 数据状态和界面状态一致要敏感
  };

  // JSX 一定得有唯一的最外层元素 树状，一定有根节点，以树来编译解析JSX
  return (
    // <> 是 React.Fragment 的简写语法，也被称为短语法或空标签，是一个占位符，不会渲染到 DOM 中，同时又能将多个子元素组合在一起
    <>
      {/* <h2 className="header">TodoForm</h2> */}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Todo text"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("初始标题");
  const [color, setColor] = useState("red");
  const handleClick = () => {
    // 异步，不是同步
    // react 性能优化，合并多次更新，统一处理
    // 数据绑定，界面更新
    // JS v8引擎，渲染引擎Blink
    // 重绘重排
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setTitle("hello world");
    // setColor("blue");

    // setState的函数式更新语法
    // 保证每个更新都基于上一个最新的更新
    // 界面的更新合并为一次的更新
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  };

  return (
    <>
      <p>当前计数：{count}</p>
      <p>当前标题：{title}</p>
      <p>当前颜色：{color}</p>
      <button onClick={handleClick}> +3 </button>
    </>
  );
}

export default App;

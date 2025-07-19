import { useState,useRef } from "react";
import "./App.css";

function ControlledInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState(""); // 响应式状态
  const [error, setError] = useState("");
  const handleChange = (e) => {
    // 频繁触发，实时判断数据是否合格
    setInputValue(e.target.value);
    if (e.target.value.length < 6) {
      setError('输入内容不能少于6个字符');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="controlled-input">受控组件</label>
        {error && <p>{error}</p>}
        <input
          id="controlled-input"
          name="controlled-input"
          type="text"
          placeholder="请输入"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">提交</button>
      </form>
    </>
  );
}



function UncontrolledInput() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value,'---------------------------------------');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input"> 非受控组件</label>
      <input
        id="uncontrolled-input"
        name="uncontrolled-input"
        type="text"
        placeholder="请输入"
        ref={inputRef}
      />
      <button type="submit">提交</button>
    </form>
  );
}

function App() {
  const onSubmit = (value) => {
    console.log(value,'----------------------');
  };

  return (
    <>
      <ControlledInput onSubmit={onSubmit} />
    </>
  );
}

export default App;

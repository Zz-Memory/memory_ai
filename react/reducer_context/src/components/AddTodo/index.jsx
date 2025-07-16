import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import {useTodoContext} from "../../hooks/useTodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;

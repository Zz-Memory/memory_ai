import { useState } from "react";

// 列表的渲染
function Todos(props) {
    // 如何拿到父组件传过来的数据状态?传参
    console.log(props, '--------------');
    return (
        <ul>
            {
                props.todos.map(todo => (
                    <li>{todo.text}</li>
                ))
            }
        </ul>
    );
}

export default Todos;
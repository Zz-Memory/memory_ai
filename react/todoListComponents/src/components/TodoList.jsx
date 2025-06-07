// 内置的hook函数
import '../Todo.css';
import { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

function TodoList() {
    // 数据 -> 变化 -> 数据状态 -> 自动刷新页面 -> 数据驱动界面
    // 数组，第一项是数据变量，第二项是函数 执行，并传入新的todos的值
    // 页面会自动更新
    // 挂载点 tbody
    // {todos.map}
    // setTodos DOM及动态更新
    // 响应式界面开发
    // hi 数据状态,setHi 修改数据状态的方法
    // es6的解构
    const [hi, setHi] = useState('haha');
    const [title, setTitle] = useState('Todo List');
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '吃饭',
            completed: false
        }
    ]);

    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text,
                completed: false
            }
        ]);
    };

    // 不应该在定时器中修改数据状态,而是通过页面的表单
    // setTimeout(() => {
    //     setTodos([
    //         ...todos,
    //         {
    //             id: 2,
    //             text: '睡觉',
    //             completed: false
    //         }
    //     ]);
    //     // DOM编程时，找到DOM节点，innerHtml
    //     // 现在更新业务，setTitle
    //     setTitle('This is TodoList');
    //     setHi('Hello React');
    // }, 3000);
    return (
        <div className='container'>
            <h1 className='title'>{title} {hi}</h1>
            <TodoForm onAdd = {handleAdd}></TodoForm>
            <Todos todos={todos}></Todos>
            {/* {
                // 这里的内容应该移入Todos组件

                // 当下
                // 数据为王，界面是被驱动的
                // 数据驱动
                // 数据绑定 data binding
                todos.map(todo => (
                    <li>{todo.text}</li>
                ))
            } */}
        </div>
    );
}

export default TodoList;
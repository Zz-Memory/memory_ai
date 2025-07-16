import { useReducer } from 'react'
import todoReducer from '../reducers/todoReducer';
// es6 参数的默认值
// {todos,} key:value 省略
// ``模板字符串
// 解构 [] = {},{} = {}
// 展开运算符，... rest 运算符
function useTodos(initialValue = []) {
    const [todos, dispatch] = useReducer(todoReducer, initialValue);
    const addTodo = (text) => dispatch({type: 'ADD_TODO', text});
    const toggleTodo = (id) => dispatch({type: 'TOGGLE_TODO', id});
    const removeTodo = (id) => dispatch({type: 'REMOVE_TODO', id});
    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
    }
}


export default useTodos;
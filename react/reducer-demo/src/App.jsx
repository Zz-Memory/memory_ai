import { useState, useReducer } from "react";
import "./App.css";

// function App() {
//   return (
//     <>
//       <LoginContext>
//         <ThemeContext.Provider>
//           <TodosContext>
//             <Layout>
//               <Header></Header>
//               <Main></Main>
//               <Footer></Footer>
//             </Layout>
//           </TodosContext>
//         </ThemeContext.Provider>
//       </LoginContext>
//     </>
//   );
// }

// 管理多个状态
const initialState = {
  count: 0,
  // isLogin: false,
  // theme: 'light'
};

// 管理 分部门
// reducer 纯函数，返回可靠的状态
// 状态生产器
// case 状态修改的规定
const reducer = (state, action) => {
  // increment,decrement
  // {type:'increment'}
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "incrementByNum":
      return {
        count: state.count + Number(action.payload),
      };
    default:
      return state;
  }
};

function App() {
  // 初始值 initialValue
  // 当前的状态值 旧状态 新状态
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // 管理 useState 有的，useReducer 也有的，而且useReducer高级一些
  const [count, setCount] = useState(0);
  // 大型项目
  // dispatch 派发 函数
  // 参数固定{type: ''} action_type
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "incrementByNum", payload: count })}
      >
        incrementByNum
      </button>
    </>
  );
}

export default App;

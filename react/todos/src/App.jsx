import { useState } from 'react';
import './App.css';
// todos 列表需要渲染
// 函数组件 App组件 组合其他的组件完成应用
// 返回 html 的函数
// html、css、js 用函数组合在一起，组件
// function App() {
//   // react 比 vue 更纯粹
//   // 数组 -> 数据
//   const todos = ['吃饭', '睡觉', '打豆豆'];
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>内容</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             // 动态页面
//             // 传统的：js DOM 编程API
//             // {}的作用：在 html 里面，写js代码
//             todos.map((item, index) => (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{item}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </>
//   );
// }
function App() {
  // 数据 -> 数据状态 数据业务 改变的（数据状态）
  const [todos, setTodos] = useState(['吃饭', '睡觉', '打豆豆']);
  const [title, setTitle] = useState('ECUT 一明');
  setTimeout(() => {
    // 以下两种方式都不可行
    // todos = ['吃饭', '睡觉', '打豆豆', '养鱼'];
    // todos.push('养鱼');
    // setTodos([...todos, '养鱼']);
    setTitle('字节 一明');
  }, 3000);
  return (
    <div>
      <h1 className='title'>皮老板拿下字节就乐了</h1>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            // html 模板
            todos.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

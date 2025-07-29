import "./App.css";
import HelloComponent from "./components/HelloComponent/index";

// react + typescript
// javascript 可能会有些问题，主要因为弱类型
// jsx 后缀改成 tsx
// 函数进行类型约束
// const HelloComponent = () => {
//   // 无返回值 void 空，不能分配为ReactNode
//   return (
//     <div>
//       hello world
//     </div>
//   );
// };
function App() {
  // 编译阶段
  // 多写了些类型声明文件
  // 多写一些代码，类型声明，代码质量保驾护航
  let count: number = 10;
  let title: string = "todoList";
  const isDone: boolean = false;
  const list: number[] = [1, 2, 3];
  // 元组类型
  const tuple: [string, number] = ["释永乐", 18];
  enum Status {
    Pending,
    Fullfilled,
    Rejected,
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束？
  // 接口
  interface IUser {
    name: string;
    age: number;
    isSingle?: boolean;
  }
  // 使用interface来约定类型
  const user: IUser = {
    name: "释永乐",
    age: 18,
    isSingle: true,
  };
  return (
    <>
      <h1>TodoList</h1>
      <p>{count}</p>
      <p>{title}</p>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <p>{tuple[0]}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{pStatus}</p>
      {/* typescript 很严格 */}
      <HelloComponent name="Jack" age={123}></HelloComponent>
    </>
  );
}

export default App;

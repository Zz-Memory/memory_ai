import "./App.css";
import PictureCard from "./components/PictureCard";

function App() {
  return (
    // JSX 语法 React 优势，方便写HTML模板
    <div className="container">
      {/* 
      自定义组件，为App根组件的子组件
      组件：html、css、js的组合，将沙子一样的东西组合起来，成为一块砖
      PictureCard 图片上传功能
      模块化了，复用，页面由DOM树 => 组件树
      */}
      <PictureCard></PictureCard>
    </div>
  );
}

export default App;

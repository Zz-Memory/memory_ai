// 私有状态
import { useState } from "react";

const TodoForm = () => {
    // JSX 一定得有唯一的最外层元素 树状，一定有根节点，以树来编译解析JSX
    return (
        // <> 是 React.Fragment 的简写语法，也被称为短语法或空标签，是一个占位符，不会渲染到 DOM 中，同时又能将多个子元素组合在一起
        <>
            <h2 className="header">TodoForm</h2>
            <form action="">

            </form>
        </>
    )
}

export default TodoForm;
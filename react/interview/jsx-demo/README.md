# JSX 考点

- 何为JSX
  - JS IN XML（HTML 是 XML 的一种形式）
  - React 推崇的 JavaScript语法糖（语法扩展），允许在 JavaScript 代码中嵌入 HTML 结构（function return JSX组件）
  - 常用于React组件的定义，使得UI结构更直观易读
  - React 的一大优点特性
- JSX可以直接运行吗？
  - 不可以
  - 类似于.styl -> stylus编译 -> .css
<ul>
    <li key={todo.id}>{todo.title}</li>
    <li key={todo.id}>{todo.title}</li>
    ...
</ul>
- JSX -> React.createElement(tag,props,children) -> document.createElement('ul')

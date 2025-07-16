# <></> 是什么？

- 解决了什么问题？
  - jsx 最外层一定要有唯一的父元素
  - 不要为了div而div
- 是什么？
  - <></>是 React.Fragment组件 的语法糖，他是Fragment组件的缩写

- 功能
  - 避免多余的DOM结构层次和元素
  - 性能更好


- 项目中一定安排Fragment key
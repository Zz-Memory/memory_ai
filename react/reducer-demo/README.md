# reducer

- 聊聊组件通信
  - 单向数据流、跨层级
    - 父子组件通信 - props
    - 子组件向父组件通信 - 自定义事件props传递
    - 兄弟组件通信 - 通过父组件中转
  - 跨层级 全局通信
    - useContext + useReducer
    - redux

- useContext + createContext 打理复杂的全局跨层级共享
  - 力不从心
  - 解决方案：useReducer 全局状态**管理**
    - 俄罗斯套娃
    - 多状态
    - 经营公司一样 制定一个制度
      - reducer 纯函数
    - 纯函数和规定

## useReducer
- useState 响应式状态
- 响应式状态管理
  - 
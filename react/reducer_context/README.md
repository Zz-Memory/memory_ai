# reducer and context
- useReducer 的核心
  - 响应式状态管理
  - reducer 纯函数 状态生产 状态改变定规矩
  - initialValue 初始值
  - dispatch（派发） 方法，派发一个action
    - {type: 'add',payload: 1}
- useContext
    - createContext 
    - Context.Provider
    - useContext

- useReducer（响应式状态） + useContext（通信）
  - 跨层级 全局共享 => 应用（theme/login/todos/...）状态管理

- 自定义hook
  - 组件（渲染） + hook（状态）

- hook + useContext
  - 全局应用级别响应式状态
- hook + useContext + useReducer
  - 全局应用级别响应式状态管理
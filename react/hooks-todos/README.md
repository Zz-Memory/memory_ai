## hooks todos

- 安排个css亮点
  - stylus
    - css 超集
  - 拥有vite脚手架
    - stylus 预编译 安装stylus依赖 vite会直接编译
    - vite来自vue社区
- react 组件设计
  - 组件是开发任务的单位
  - 设计组件
    - 界面功能 状态 响应式
    - 新建todo 表单
    - 修改 列表
    - 删除 
  - 按功能划分 粒度
    - form
    - list列表
      - Item 组件 有利于维护和**性能**

- 字体
  - 设置多个，设备的支持（本地包含）
  - 苹果设备 -apple-system
  - 前端负责用户体验，字体也是体验的一部分

- rem
  - 相对单位
  - 移动端的重要单位，不要用px（绝对单位，像素点）
    - 移动端 宽高不定 rem（html font-size） vw/vh（viewport） em（相对于自身的font-size，等比例） 相对单位
    - 使用相对单位，可以在所有设备上适配


- 直接解构
  const {
    todos,
    onAddTodo
  } = props
  - 变量 修改值
    - 数据状态
      - Data binding **数据绑定** jsx就是静态的
        - {} 数据绑定
      - 数据和界面状态的统一
        - 界面由数据驱动


- vue 和 react 区别
  - 入门
    - vue 好入门，api 好用
    - react 倾向于原生JS，入门难
      - hooks
  - vue 双向绑定： <input v-model="text"/>
  - react 单向绑定： <input value={text} onChange={() => setText(text)} />


- 本地存储
  - 浏览器本地存储
    - localStorage
      - key:value 存储
      - localStorage.setItem('key', value)
      - localStorage.getItem('key')
      - localStorage.removeItem('key')
  - localStorage 与 cookie 的异同
    - cookie
      - http 无状态，head cookie 带上
      - cookie 太大了，会影响http性能，所以cookie的的数据存储很少（4kb左右）
      - cookie 前端、后端都可以设置
    - localStorage
      - localStorage 只在浏览器端
        - todos 5mb 左右 IndexedDB的数据以GB来计算
        - domain


## 自定义hooks
- 自己定义的
  - use
  - 某一项功能
    - 简单函数的封装
    - 响应式的状态
    - effect
    - todos
- 自定义hooks
  - 现代react app的架构一部分
  - hooks目录
    - 自定义hooks
    - 框架common部分
    - 业务定制 hooks
  - use开头
    - state，effect、逻辑封装复用
    - return
      - todos
      - toggle
      - addTodo
      - deleteTodo
    - 函数式编程思想的体现
  - 组件更好地聚焦于模板渲染
  - 全面hooks函数式编程


- 两个遗憾
  - ../../ 路径定位山路十八弯
    - 解决：在vite中配置 alias 短路径
  - toggle、delete 跨越组件层级有点多，useContext
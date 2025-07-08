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
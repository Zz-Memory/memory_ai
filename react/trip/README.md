# react 旅游App
README.md 很重要，可以方便面试官了解项目的基本情况
- 移动App
- 模仿App
  - 喜欢的、国外的
  - 有点改变
- 绝大多数的考点
  - 都适用于任何App

## 技术栈
- React 全家桶
  - React 组件开发
  - 组件的封装
  - 第三方组件库
  - 受控与非受控组件
  - hooks编程 自定义hooks
  - React-Router-DOM
    - SPA
    - 路由守卫
    - 懒加载
  - Zustand
- mock 接口模拟
- axios 请求拦截和代理
- JWT 登录
- module css
- css 预处理器 stylus
  - 弹性布局 flex
  - transition
  - transform
- vite 配置
- 性能优化
  - 防抖节流
    - useCallback useMemo ......
- LLM
  - chat
  - 生图
  - 语音
  - coze 工作流调用
  - 流式输出
- 移动端适配
  - rem
- 单例模式 设计模式的理解
- git 提交等编程风格

## 项目的架构
- src
  - components
  - pages
  - api
  - store
  - hooks
- mock

## 开发前的准备
- 安装的包
  - react-router-dom zustand axios react-vant lib-flexible
- 开发期间的依赖
  - vite-plugin-mock jwt postcss-pxtorem
- vite 配置
  - alias
  - mock
  - .env.local
    - LLM api key
  - user-scalable=no 禁止用户缩放
  - css 预处理
    - index.css reset
      - box-sizing: border-box
      - font-family: -apple-system
    - App.css 全局通用样式
    - module.css 模块化样式
  - 移动端适配 rem
    - 不能用px（绝对单位），要用rem（相对单位）html（字体大小默认16px）
    - 不同设备上体验要一致
    - 不同尺寸手机 等比例缩放
      - 设计师设计稿 750px iphone4 宽度375pt * 2 = 750px
      - 小米
      - css 一行代码 手机不同尺寸 html font-size 等比例缩放
    - layout
    - flexible.js 阿里开源提供的解决方案，在任何设备上适配
      - 1rem = 屏幕宽度/10
      - 设置html fontSize = window.innerWidth/10
        - css px宽度 = 手机设备宽度 = 375
        - 1px = 2发光源
        - 750px 设计稿
- 设计稿上一个盒子的大小
  - 1像素不差的还原设计稿
  - 设计稿中像素单位
  - 元素尺寸/75 = rem

## 项目亮点
- 移动端适配
  - lib-flexible => 1rem = 屏幕宽度/10
  - 设计稿 尺寸是iphone标准尺寸 750px
  - 前端的职责是还原设计稿
  - 频繁的单位换算 设计稿尺寸/75 = rem
  - 自动化？ 
    - postcss-pxtorem
    - postcss 是css预编译器，很强大
    - vite自动读取postcss.config.js 将css 文件编译
    - px => rem

## git 提交规范
- 项目初始化

## 功能模块
- UI 组件库
  - react-vant 第三方组件库 
    - 开发项目时，70%的组件已经有了，不用写，只需要引用
    - 选择一个适合业务的UI组件库 或者 公司内部的组件库
- 配置路由及懒加载
  - 懒加载
  - 路由守卫
  - Layout 组件
    - 嵌套路由Outlet 分组路由配置
    - 网页有几个模板Layout
      - Route 不加path，对应的路由自动选择
      - mainLayout 模板
      - blankLayout 模板
  - tabbar 
    - react-vant + @react-vant/icons
    - value + onChange 响应式
    - 直接点击链接分享active的设置
- chatbot 模块
  - llm 模块 chat 封装
  - 迭代chat，支持任意模型
## 项目亮点与难点
- 前端智能
  - 封装一个chat函数
  - 对各家模型比较感兴趣，升级为kimiChat、doubaoChat...
    - 大模型之间有性能、能力、性价比的差异
    - 可以随意切换大模型，通过参数抽象
  - 文生图
    - 优化prompt设计
- 原子CSS
  - App.css 里面添加通用样式
  - 各自模块里module.css 不影响别的组件
  - lib-flexible 移动端适配
  - postcss pxtorem 插件 快速还原设计稿
  - 原子类的css
    - 一个元素按功能逻辑拆分成多个类，和原子一样
    - 元素的样式就可以由这些原子类组合而成
    - 样式复用的更好，以后几乎可以不用写样式
- 自定义Hooks
  - useTitle
  - 一定要设置
- es6 特性使用
  - tabbar 的高亮
    - arr.findIndex
    - str.startsWith
    - promise
## 项目遇到过什么问题，怎么解决的
- chat message 遇到 message 覆盖问题
- 闭包陷阱问题
  - 一次事件里面，两次setMessages()

- 项目迭代
  - 功能由浅入深
  - chatbot deepseek 简单chat
  - deepseek-r1 推理模型
  - 流式输出
  - coze
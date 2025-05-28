# 微信当家框架 WEUI

# BEM 国际命名规范 （Block Element Modifier）

- 项目 .weui-page
  - button页面
- 规范

- Block 块
  - 一块内容 项目代号 风格+可复用代码
  - 项目代号 + 区块的作用或职责 page
  - .weui-page
  - .tm-page

- Element 元素
  - 块__元素
  - 元素 __header
  - 同一块中概念不重叠
    - .weui-page__title
    - .weui-page__desc

- Modifier 状态
  - .weui-{block}__{element}--{modifier}
  - .weui-btn--primary
  - .weui-btn--default

- UI 框架中button、input、cell，通用的**组件**
  - 重启BEM 命名
  - .weui-btn **复用**
  - 业务代码
  - 基础架构代码 学习WEUI的源码
  - 几个block组合起来，页面就出来了，组件式开发

- BEM 规范让我们一起大厂协作
  - 页面由blocks构成 .weui-{block}__{element}--{modifier}
  - blocks 包含一些elements
  - element 会有一些状态
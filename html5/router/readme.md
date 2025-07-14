# 路由

history
hash

- 传统页面开发
  - 重要的用户体验缺失
  - 需要去到后端拿到新的html，重新渲染
    - 没有了白屏
  - a 超链接切换页面
  - 相比于react-router-dom的局部热更新
  - 前端路由更新，需要重新渲染整个页面

- 新的react-router-dom SPA（Single Page Application）单页应用
  - 只有一个页面，但是能带来多页面效果

## SPA(Single Page Application)单页应用
- 只有一个页面
  - react 组件
    - 页面级别组件
  - Routes/Route 声明，文档流占位
  - Routes外面，Outlet外面，不用更新
  - url
  - Route内部显示哪个页面组件
    - 热更新
  - 用一个页面完成了多个页面的显示效果
  - SPA 使得用户体验特别棒

## 核心
- url切换
  - 不能用a超链接切换页面
  - 用Link代替a超链接
    - 不去重新发送请求
    - 事件，js 动态加载
- 事件 hashChange / pushState
- 根据当前的url，取对应的组件
  - 替换掉之前的页面级别组件
- 用户体验
  - URL改变了，但是竟然不用刷新整个页面
  - 不再看白屏
    - 页面很快
    - About、Home都是前端组件


## url 改变，但不重新渲染的解决方案
- hash的改变，很早就有
  - 原来是用来页面锚点，长页面的电梯
  - 不会刷新页面
  - #/
  - #/about
- 
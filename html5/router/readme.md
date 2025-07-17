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

## 基于SPA
- url可以改变，但不会向后端发送请求（前端路由）
  - hash + hashChange 事件 + DOM
  - history + pushState/popState
- 前端路由通过react-router-dom配置 页面级别组件
  - 热更新 Route
  - Outlet
- 单页应用 
  - 只有一个页面，但可以有多个 url 路由状态
  - 页面级别组件
  - window.location, window.history 
  - 栈 
  - State

- history
  - 很早就有，在浏览器历史记录里游走
  - html5 赋予history新的功能
  - hash + hashchange 有优点，但是有很大的缺点
    - 兼容性好
    - 缺点 http://127.0.0.1:5501/html5/router/3.html#home
    - hash 不好理解
    - 不这样，传统后端路由一样
    - http://127.0.0.1:5501/html5/router/history    首页
    - http://127.0.0.1:5501/html5/router/history/about    关于我们
  - 怎么样像后端路由，同时不刷新页面？
  - html5 升级了 history api 来实现之

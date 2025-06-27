# ajax_promise

## api
- 网站地址 用户访问的
  - www.bilibili.com
- api 接口地址
  - https://api.github.com/users/shunwuyu

- JSON格式 数据返回
  - 后端 node、Java、Go 开发
- 资源
  - 前端
- 通过 JS fetch 主动拉取资源
  - 前端自己做主
- web 2.0 动态页面
  - 用户生成数据

## async 和 await
- async： 声明一个异步函数，该函数返回Promise
- await： 暂停异步函数执行，等待Promise解决，并提取其结果值
  - await 只能在 async 函数中使用
- 二者结合使用可以让异步代码写起来像同步代码，避免“回调地狱”


## ajax
- XMLHttpRequest.readyState 属性表示请求的当前状态，共有 5 个状态码（0-4），其中 1-4 是请求生命周期中的关键阶段：
  - readyState === 1 (OPENED)
    已调用 open() 方法，请求已初始化，但尚未发送（未调用 send()）。
  - readyState === 2 (HEADERS_RECEIVED)
    已调用 send() 方法，请求已发送，服务器已响应并**返回响应头**。
  - readyState === 3 (LOADING)
    服务器正在**返回响应体**（数据正在接收中），responseText 已有部分数据可用。
  - readyState === 4 (DONE)
    请求已完成（成功或失败），响应数据已完全接收，可以使用。

  - readyState === 0 (UNSENT)
    XMLHttpRequest 对象已创建，但尚未调用 open() 方法初始化请求。此时请求处于未发送状态。
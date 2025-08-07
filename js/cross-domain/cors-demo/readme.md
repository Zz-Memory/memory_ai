# 进阶跨域方案 cors


- 日常用的最多的跨域解决方案
  - JSONP 不跨域
  - cors 跨域
  - 浏览器会发送CORS通信，如果服务器端的响应头设置了Access-Control-Allow-Origin
  - 后端实现了CORS，可以跨域
  - *
  - 白名单

- 简单跨域请求
  - GET/POST/HEAD 简单设置下Acess-Control-Allow-Origin 就行了
  - Content-Type: text/plain multipart/form-data
  - application/x-www-form-urlencoded

- 复杂跨域请求
  - 其他的方法 安全升级
  - 预检请求
    - 200
    - Acess-Control-Allow-Methods
    - Acess-Control-Allow-Headers
    - ...
    - METHOD OPTIONS
  - 真正的请求
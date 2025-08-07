# 面试热题 跨域


- 大前端 都是JS
  - React/Vue mvvm 前端
  - Node.js 后端
  - 移动端（ios/android）
  - 桌面端exe vscode 都是ts写出来的
  - 嵌入式，AI

- 前后端联调
  - 前后端分离 跨域
  - 前端 5173
    - from origin
  - 后端 8080
    - server
  - 同源，指的是**协议 + 域名 + 端口**完全相同，protocol://domain:port
    - http://localhost:5173 => http://www.baidu.com/api/user
      - 域名domain不同，不是同一个源
    - http://localhost:5173 => https://localhost:5173/api/user
      - 协议不同，也不同源，严格，为什么？
    - http://localhost:5173 => http://localhost:8080/api/user
      - 端口号不同，此时也不同源
    - origin = http(s) + domain + port
  - CORS policy 同源策略
    - 跨域了，CORS会block请求

- 为什么要学习跨域？
  - 前后端分离是日常开发的形式，端口或域名不一样
  - CORS Policy 同源策略
    - 浏览器端的机制
  - 跨域请求被block了
    - 请求到达了服务器端吗？
    - 请求到达了
    - 响应被浏览器抛弃了 block掉了响应
    - 浏览器的CORS策略
  - 安全问题
    - 前端（千千万万的用户）的安全
    - 跨源的，可能不被信任
  - 怎么解决跨域？
    - 既拿到cross origin 的资源，同时又不违反CORS机制
      - fetch/xhr 被 CORS 管着了
      - Cookie/localStorage也被CORS管着
    - img、script、link等可以跨域
    - 不用被管着的fetch/xhr/axios，用script

- 使用script的跨域解决方案 JSONP
  - script src 发送一个请求
    - 必须是get请求
    - 响应头中需要有Content-Type: application/javascript
    - 前端想要的是JSON，还想要可以继续执行
    - 前端埋一个函数
      - 后端返回一个JS函数的执行
      - 在执行时，将数据传给函数
    - 需要后端的配合
  - 返回JSON
  - JSON 前端需要后端提供的JSON数据
  - Padding


- JSONP 利用了 script 可以跨域访问
  - 前端使用script src=跨域的资源请求地址
  - 需要后端配合，返回的JSON外面包含着函数
  - 页面上有个函数在等待执行

- 手写JSONP
  - 后端配合解析script url get 请求中的callback参数值
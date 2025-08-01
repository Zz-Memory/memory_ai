// node 后端
// node 内置的核心模块
// js 在命令行运行
// JS 有两种模块化方案
// require node 早期模块化commonJS
// import es6 更先进的模块化方案

// old
// node 受欢迎 中小项目开发
// 端口 -> 某个服务
// 3306 mysql 服务 进程（资源） 线程（执行）
//  domain（localhost） -> ip地址（127.0.0.1） -> 某台设备 -> port 设备上的某个服务（进程）
// 一台设备上可以很多端口使用，有多个http服务 多个网站
// 不要使用一些常用的特殊端口
const http = require("http");
const fs = require("fs"); // file system
const path = require("path"); // 路径模块
const server = http.createServer((req, res) => {
  //   res.end("hello http server");
  // http 基于请求响应的协议 为了资源
  //   路由 Method + url，定位了服务器端的资源
  console.log(__dirname, path.join(__dirname, "public", "index.html"));
  if (req.method === "GET" && (req.url === "/" || req.url === "/index.html")) {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      // 异步 callback
      (err, content) => {
        // 前端体验为主
        // 后端稳定为主
        if (err) {
          res.writeHead(500); // 状态码500 => 服务器错误
          res.end("Server error");
          return;
        }
        // 不只是html、css、js、jpg
        res.writeHead(200, {
          "Content-type": "text/html",
        });
        res.end(content);
      }
    );
  }
   
  // 后端路由，暴露资源
  if (req.method === "GET" && req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "public", "style.css"),
      (err, content) => {
        if(err){
          res.writeHead(500); // 状态码500 => 服务器错误
          res.end("Server error");
          return;
        }
        res.writeHead(200, {
          "Content-type": "text/css",
        });
        res.end(content); // 添加这行来结束响应
      });
  }

  // 处理script.js请求
  if (req.method === "GET" && req.url === "/script.js") {
    fs.readFile(path.join(__dirname, "public", "script.js"), (err, content) => {
      if (err) {
        res.writeHead(500); // 状态码500 => 服务器错误
        res.end("Server error");
        return;
      }
      res.writeHead(200, {
        "Content-type": "text/javascript",
      });
      res.end(content);
    });
  }
});

server.listen(8080, () => {
  console.log("server is running at http://127.0.0.1:8080");
});

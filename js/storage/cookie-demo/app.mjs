// es6 模块化
// mjs 后缀使用es6模块化
// 模块化是语言能力
// node 默认不支持es6的模块化（最新版本v22又支持了）
// node 准备跟require commonjs 说再见
// es6 module 更先进 mjs
import http from "http";
const server = http.createServer((req, res) => {
  res.end("hello http server");
});

server.listen(3000, () => {
  console.log("server is running at http://127.0.0.1:3000");
});

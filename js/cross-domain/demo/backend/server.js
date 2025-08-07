// CommonJs
const http = require("http");

// js异步编程，异步无阻塞
// node 天生性能好，相同用户访问数，使用的服务器数量少，更便宜
const server = http.createServer((req, res) => {
    // 配置允许的源
    const allowOrigin = 'http://localhost:5173';
    res.setHeader('Access-Control-Allow-Origin', allowOrigin);
    // 配置允许的请求方法
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    // 配置允许的请求头（根据前端实际使用的头信息添加）
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.url === '/api/hello' && req.method === 'GET') {
        console.log('进入接口');
        res.writeHead(200, {
            // 'Content-type': 'application/json'
            'Content-type': 'application/javascript;charset=utf-8'
        });
        // res.end(JSON.stringify({
        //     message: 'Hello from Node.js backend'
        // }))
        
        // res.end('console.log("hello world")')

        // JSON
        const data = {
            code: 0,
            msg: '字节，我来了'
        }
        res.end("callback(" + JSON.stringify(data) + ")");
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
})

// 监听端口
server.listen(8080, () => {
    console.log('Server is running on port 8080')
})
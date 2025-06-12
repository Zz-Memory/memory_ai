// 读取1.html里面的内容
// 读取完后 打印 读完了
const fs = require("fs"); // 引入js内置的文件模块
const readFilePromise = new Promise((resolve) => {
  fs.readFile("./1.html", "utf8", (err, data) => {
    console.log(data.toString());
    resolve();
  });
});
readFilePromise
.then(()=>{
    console.log('111')
})

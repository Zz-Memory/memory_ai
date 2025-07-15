// 纯函数
// 相同的输入，一定会有一样的输出
// 没有副作用，不操作外部变量、不发请求、不改DOM
// 管理数据状态，纯函数去管理 => 全局状态更正确
// 全局状态更重要，有很多地方对其进行操作
// 修改值、修改方法
function add(a, b) {
  return a + b;
}

// 不纯的
let total = 0;
function addTotal(a) {
  total += a;
  return total;
}

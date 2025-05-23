// 报错 ReferenceError: Cannot access 'a' before initialization;
// TDZ 暂时性死区 变量声明前就调用会报错
// let 与 const 处于词法作用域中，不与 var 以及 函数 处于同一作用域
console.log(a);
let a = 1;
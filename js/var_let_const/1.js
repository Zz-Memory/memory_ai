// 代码 
// 过程：代码 -> v8引擎 -> 编译 -> 执行
// 编译阶段 一刹那 语法检测 做点准备（变量查找）
// 执行阶段
// 变量提升 当前作用域的顶部

// 变量提升是面试官喜欢的，js开发者设计的
// 不好，代码的执行结果和代码阅读顺序不一致，有歧义
// 糟粕，避开
// 现在声明一个变量，不再使用 var，用 let、const 代替
showName();

console.log(myName);

var myName = 'zx';
function showName(){
    let b = 2;
    console.log('函数执行了');
}
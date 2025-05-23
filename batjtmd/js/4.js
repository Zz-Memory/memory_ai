// 全局的 js 代码在执行之前会有一个编译的过程
// 过程分为编译以及执行阶段,先编译才能执行

// 变量提升了
console.log(value, '-------');
if (false) {
    // 声明变量
    // 赋值的操作在执行阶段
    var value = 1;
}
// undefined 有这个变量，但是未声明类型
console.log(value);
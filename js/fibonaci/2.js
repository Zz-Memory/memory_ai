// 如何用闭包优化fib
// 记忆功能
function memorizedFib() {
  // 闭包 1. 函数嵌套函数
  // 自由变量
  const cache = {};
  return function fib(n) {
    if (n <= 1) {
      return n;
    }
    if (cache[n]) {
        console.log('命中缓存',n)
      return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}
// 闭包 2. 在外部访问
const fib = memorizedFib();
console.log(fib(4));
// add 函数,3个参数
// add.length 3
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3);
// 柯里化 手写curry函数
function curry(func) {
  // 返回一个函数，用于收集参数
  return function curried(...args) {
    // 如果参数数量达到或超过原函数的参数长度，直接执行
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    // 否则返回新函数，继续收集参数
    return function (...newArgs) {
      return curried.apply(this, [...args, ...newArgs]);
    };
  };
}

// 测试
function add(a, b, c) {
  return a + b + c;
}
let addCurry = curry(add);
// 拆解函数
// 逐步地去获取函数需要的参数,当达到fn需要的参数数量时,执行结果
console.log(addCurry(1)(2)(3));

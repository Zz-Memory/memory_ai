// 函数对象
function add(a, b, c) {
  // console.log(arguments,arguments.length,Object.prototype.toString.call(arguments));
  //   arguments 函数运行时决定 参数总管
  //   下标访问第几个参数 数组

  // 类数组,有length属性,for,但是没有数组太多的方法
  //   console.log(arguments.map((item) => item + 1));
  //   如何将类数组转成真正的数组?
  const args = Array.from(arguments);
  console.log(args.map((item) => item + 1));

  
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    result += arguments[i];
  }
  return result;
  //   return a + b + c;
}
console.log(add(1, 2, 3));
console.log(add.length);

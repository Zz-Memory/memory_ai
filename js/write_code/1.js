// // 完成的功能：模拟实现new操作符
// function objectFactory() {
//   // 创建一个新对象
//   var obj = {};

//   // 拿到构造函数
//   // 类数组上没有shift方法，所以借用数组的shift方法（方法借用(Function Borrowing)机制）
//   var Constructor = [].shift.call(arguments);

//   // 将新对象的原型链接到构造函数的原型（推荐使用Object.create替代直接设置__proto__）
//   Object.setPrototypeOf(obj, Constructor.prototype);
//   // 或者使用: obj.__proto__ = Constructor.prototype; (不推荐，已被废弃)

//   // 使得obj可以调用构造函数中的属性，绑定this
//   //   Constructor.apply(obj, arguments);
//   var result = Constructor.apply(obj, arguments);

//   //   // 如果构造函数返回了一个对象，则为该对象设置正确的原型链后返回，否则返回新创建的对象
//   //   if (typeof result === "object" && result !== null) {
//   //       // 为构造函数返回的对象设置正确的原型链
//   //       Object.setPrototypeOf(result, Constructor.prototype);
//   //     return result;
//   //   }
//   //   return obj;

// //   || null 的情况，仍然会返回object，构造函数 return 简单类型时，忽略
//   return typeof result === "object" ? result || obj : obj;
// }


// es6版本
function objectFactory(Constructor, ...args) {
  // 创建一个新对象
  var obj = {};

  // 拿到构造函数
  // 类数组上没有shift方法，所以借用数组的shift方法（方法借用(Function Borrowing)机制）
  //   var Constructor = [].shift.call(arguments);

  // 将新对象的原型链接到构造函数的原型（推荐使用Object.create替代直接设置__proto__）
  Object.setPrototypeOf(obj, Constructor.prototype);
  // 或者使用: obj.__proto__ = Constructor.prototype; (不推荐，已被废弃)

  // 使得obj可以调用构造函数中的属性，绑定this
  var result = Constructor.apply(obj, args);
  // 如果构造函数返回了一个对象，则为该对象设置正确的原型链后返回，否则返回新创建的对象
  // //   || null 的情况，仍然会返回object，构造函数 return 简单类型时，忽略
  // return typeof result === "object" ? result || obj : obj;
  return typeof result === "object" && result !== null
    ? (Object.setPrototypeOf(result, Constructor.prototype), result)
    : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;

  //   // 测试返回基本数据类型的情况
  //   return 'hello world'; // 返回字符串（基本数据类型）

  // 测试返回对象的情况

  return {
    name: this.name,
    age: this.age,
  };
}
Person.prototype.sayHi = function () {
  console.log(`你好，我是${this.name}`);
};

let p1 = new Person("张三", 18);
console.log(p1);
// p1.sayHi();

// 手写new
let p = objectFactory(Person, "张三", 18);

console.log(p);
p.sayHi();
console.log(p instanceof Person);

// 工作流程
// new Person(...) -> function[[construct]] -> {} && this -> [[call]]
// -> {}.__proto__ -> Constructor.prototype -> return {}

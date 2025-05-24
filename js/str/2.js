// 'hello'.length 写法
// len('hello') 函数式写法，没有
// 背后魔法
// JS 面向对象的统一写法

// 数组对象
['h', 'e', 'l', 'l', 'o'];

// 'hello' -> new String('hello')

// console.log('hello' == new String('hello')); // true
// console.log('hello' === new String('hello')); // false

let a = 'abc';
let b = new String('abc');
console.log(a == b); // 值相同
// js 给所有的简单数据类型提供了 相应类型的类 包装类
console.log(a === b); // 类型不同
console.log(b.split(''));
// 为了统一面向对象写法
// js 会主动地把简单数据类型包装成为一个对象
// 之后会销毁对象，回归原来的简单类型
console.log(a.split(''));

// ES5 写法
function reverseString1(str) {
    // str -> 字符串 -> 基本数据类型 primitive
    return str.split('').reverse().join('');
}
console.log(reverseString1('Hello'));

// ES6 写法 箭头函数 简洁 function不要了 用箭头代替
// 只有一句话时，省略{}
// 是返回值时，连return都可以省略
// 只有一个参数时，()也可省略
const reverseString2 = (str) => str.split('').reverse().join('');
console.log(reverseString2('Hello'));
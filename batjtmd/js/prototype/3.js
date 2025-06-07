// 没有class的js如何苦苦追求 OOP
// 首字母大写 约定 类的概念
// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
// new 一下，实例化对象
const hu = new Person('吉他胡', 18);
const gz = new Person('小公主', 18);
console.log(hu);
console.log(gz);
hu.sayHello();
console.log(hu.__proto__);
let o = {a:1};
console.log(o.__proto__);
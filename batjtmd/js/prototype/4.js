function Person(name, age) {
    this.name = name;
    this.age = age;
}


var hu = new Person('吉他胡', 18);
console.log(hu.__proto__);
var a = {
    name: '孔子',
    hometown: '山东'
}

hu.__proto__ = a;
console.log(hu.__proto__);

Person.prototype.sayHello() = function() {
    console.log(`Hello, my name is ${this.name}`);
};
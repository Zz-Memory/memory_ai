// Object.defineProperty
var obj = {}; // 对象

// es5 提供的api，兼容性更好
// react 和 vue 最新版，对浏览器有要求
Object.defineProperty(obj, 'num', {
    value: 1,
    // 属性描述
    configurable: false, // 默认为false，是否可配置（是否可删除元素，以及是否可修改其他描述符）
    writable: false, // 是否可修改值（默认为false）
    enumerable: true, // 属性是否可枚举（默认为false）
    // get: function(){
    //     console.log('读取了属性');
    //     return 1;
    // }
})

obj.num = 2;
console.log(obj.num);

for (const key in obj) {
    console.log(key + ':' + obj[key]);
}

console.log(Object.getOwnPropertyDescriptor(obj,'num'));

Object.defineProperty(obj,'name',{
    writable: true,
})
obj.name = 'Bob';
console.log(obj.name);

for (const key in obj) {
    console.log(key + ':' + obj[key]);
}
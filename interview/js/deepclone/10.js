let obj1 = {
    name: '张三',
    age: 20
}

let obj2 = obj1; // 没有实现拷贝
// 不是拷贝,而是引用传递。只是换个名字，其指向的地方，本质上还是一个东西
obj2.age = 99;

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
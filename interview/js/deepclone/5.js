const target = {
    a: 1
}

// 如果源对象是简单数据类型，则忽略
Object.assign(target, undefined);
Object.assign(target, null);
Object.assign(target, 123);
console.log(target);

// 目标对象必须是对象
console.log(Object.assign(undefined,{a: 1}));
const target = {
    a: 1,
    b: 2
}

const source = {
    b: 4,
    c: 5
}
// Object.assign 后来者居上，覆盖同名属性
Object.assign(target, source);
console.log(target);
// 枚举类型
const STATUS = {
    // 常量
    READY: Symbol('ready'),
    RUNNING: Symbol('running'),
    DONE: Symbol('done')
}

let state = STATUS.READY.description;
console.log(state);
if (state === STATUS.READY.description) {
    console.log('匹配成功！');
}
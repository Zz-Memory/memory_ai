// # 怎么用的 复杂函数参数的默认值
// 默认值，用户会传的 Object.assign 将其收入囊中
// 目标对象是{}空对象，合并用户传参和默认参数
// Option 是会传入的对象
function createUser(options) {
    const defaults = {
        name: '匿名用户',
        age: 18,
        isAdmin: false
    }

    const config = Object.assign({}, defaults, options)
    console.log(config);
};

createUser({name: 'Tom', age: 20});

const baseConfig = {api: '/api', timeout: 500};
const envConfig = {timeout: 10000, debug: true};
const finalConfig = Object.assign(
    {},
    baseConfig,
    envConfig
);

console.log(finalConfig);
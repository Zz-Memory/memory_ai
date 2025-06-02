// 独一无二的值
const sym = Symbol();
console.log(typeof sym, sym);

// symbol 可以用于对象的key
// 使用 Symbol 构造函数实例化，一个标记为 id 的唯一值ID
// ID唯一性，Symbol
// es6 之前 key string
// symbol 作为 key
const ID = Symbol('id');
const sex = Symbol('sex');
const age = Symbol('age');
const user = {
    name: 'Alice',
    [sex]: '男',
    [age]: 18,
    [ID]: 123
};

user.age = 19;
console.log(user.name, user[ID], user.ID, user[age], user.age); // Alice 123 undefined 18 19
for (let key in user){
    console.log(key);
}
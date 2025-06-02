console.log(0 / 0);
// 平方根 NaN
// js 内置的 Math 对象
console.log(Math.sqrt(-1));
console.log(parseInt('123'), parseInt('a123'), parseInt('123a'));
console.log(Number(undefined)); // NaN
console.log(NaN === NaN); // false
console.log(isNaN(NaN), isNaN(0 / 0));
console.log(typeof NaN);
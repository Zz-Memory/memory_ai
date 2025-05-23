const arr = [1,2,3,4,5];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);

// 如何区分 Object 的这些类型？
// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(date));

// 在 MDN 文档看一些资料
function getType(value){
    // string api 的选择
    // split + substring
    return Object.prototype.toString.call(value).slice(8,-1);
}

console.log(getType(arr));
console.log(getType(date));
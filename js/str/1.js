/**
 * @func 反转字符串
 * @param {string} str 
 * @return string
 */

function reverseString(str){
    // str -> 字符串 -> 基本数据类型 primitive
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));
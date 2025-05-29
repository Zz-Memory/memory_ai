/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */
function hongBao(total, num) {
    // 公平性
    // 平均值
    // 随机性
    const arr = [];
    // 剩余金额
    let restAmount = total;
    // 剩余个数
    let restNum = num;
    for (let i = 0; i < num - 1; i++) {
        // 包装类
        let amount = Math.random(restAmount / restNum * 2).toFixed(2);
        console.log(amount);
        restAmount -= amount;
        restNum --;
        arr.push(amount);
    }
    return arr;
}
const money = hongBao(30,10);
console.log(money);
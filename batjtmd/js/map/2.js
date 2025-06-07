console.log(['1', '2', '3'].map(parseInt)); // [ 1, NaN, NaN ]

// parseInt num
['1', '2', '3'].map((num, index, arr) => {
    console.log(num,index,arr);
    return num;
});
// 1 0['1', '2', '3'];
// 2 1['1', '2', '3'];
// 3 2['1', '2', '3']


// parseInt 第二个参数是决定进制
console.log(parseInt('1',0,['1','2','3'])); // 1
console.log(parseInt('2',1,['1','2','3'])); // NaN
console.log(parseInt('3',2,['1','2','3'])); // NaN
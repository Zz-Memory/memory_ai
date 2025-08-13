const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}


// console.log(JSON.parse(JSON.stringify(target)));

// 递归 + 拷贝
// 对数组支持不好
function deepClone(source) {
    if (typeof source === 'object') {
        let cloneTarget = {}; // 分配新空间
        for (const key in source) {
            // 遍历
            cloneTarget[key] = source[key];
        }
        return cloneTarget;
    } else {
        return source;
    }
}

const newTarget = deepClone(target)
newTarget.field4.child = 'newChild';
console.log('target', target);
console.log('newTarget:', newTarget);
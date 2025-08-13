const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [2, 4, 8]
}

// 循环引用
target.target = target;

// es6 的新数据类型Hash Map
function deepClone(source, map = new WeakMap()) {
    if (typeof source === 'object') {
        const cloneTarget = Array.isArray(source) ? [] : {};
        if (map.get(source)) {
            return map.get(source);
        }
        map.set(source, cloneTarget);
        for (const key in source) {
            cloneTarget[key] = deepClone(source[key], map);
        }
        return cloneTarget;
    } else {
        return source;
    }
}
const newTarget = deepClone(target);
console.log(newTarget);
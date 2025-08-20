// thenable
function light(color,time){
    console.log(color);
    return new Promise(resolve => setTimeout(resolve,time));
}

function loop() {
    light('red',3000)
        // 控制流程，异步变同步
        .then(() => light('yellow',2000))
        // 当返回值也是promise的时候，继续thenable
        .then(() => light('green',3000))
        .then(loop); // 递归
}

loop();
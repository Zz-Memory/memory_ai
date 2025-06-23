function f1(){
    var n = 999;
    nAdd = function(){
        n += 1;
    }
    function f2(){
        console.log(n);
    }
    return f2;
}

const f2 = f1();
f2();
nAdd();
f2();
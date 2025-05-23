// 声明了一个对象常量
// 内存中开辟了一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是一个弱类型语言 变量的类型由值决定
//  = 赋值 Object
// 对象字面量（字面意义上） JSON
// JS 太灵活，不需要new，通过{}拿到对象，[]拿到数组
const hxt = {
  name: "黄新天",
  age: 20,
  tall: 187,
  hometown: "山东",
  isSingle: true,
};

const pyc = {
  // key value 键值对
  // String
  name: "彭奕淳",
  // Number 数值类型
  age: 21,
  hometown: "江西新余",
  // Boolean 布尔类型
  isSingle: true,
  sendFlower: function (girl) {
    // 方法
    console.log(pyc.name + '给' + girl.name + '送了99朵玫瑰');
    girl.receiveFlower(pyc);
  },
};

const xm = {
  xq: 30,
  name: '小美',
  receiveFlower: function (sender) {
    console.log('收到了' + sender.name + '送的99朵玫瑰');
    if (xm.xq > 90) {
      console.log('硕果走一波')
    } else {
      console.log('gun ~~~')
    }
  }
};

const xh = {
  name: '小红',
  room: '408',
  hometown: '江西新余',
  // 送小美，送小红，都具有receiveFlower方法
  // 对象互换
  // 接口 interface
  receiveFlower: function (sender) {
    // if (sender.name === '彭奕淳') {
    //   console.log('彭哥哥，让我们在一起吧');
    //   return;
    // }

    // 定时器
    setTimeout(function () {
      xm.xq = 99;
      xm.receiveFlower(sender);
    }, 3000);
    // xm.receiveFlower(sender);
  }
};

pyc.sendFlower(xh);
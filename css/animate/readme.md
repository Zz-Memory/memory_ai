# 动画
从 url输入 到 页面渲染

- transition 过渡
- transform 变换
- animation 关键帧动画
- js
  - dom 对象
  - 频繁修改 dom 节点的style属性
  - requestAnimationFrame 方法
    - 请求动起来，动画帧
    - dom 动画和屏幕的帧率一致，一般为 60 次/秒（60HZ）
    - 浏览器每一帧执行的操作
    - 每一帧执行的操作不一样，所以动画不一样
    - +递归
- web 程序
  - 浏览器程序 c++
  - 输入是html css
  - 输出静态页面,页面完成渲染
  - domContentLoaded事件还没有完成页面渲染
  - setTimeout(() => {},0) 会以页面渲染优先

- js 动画和 css transition 动画选择哪一个?
- js
  - js 复杂
  - js 性能差?不推荐这么做动画
    - 频繁地操作DOM,js 性能开销的主要问题
    - 页面的重新绘制(开销也大)
- css
  - css 简单
  - 性能挺好(transform opacity)
    - transition 不用去不停地绘制? 真不会那么像js一样触发那么多次的重新绘制

- 页面渲染流程
  - 1. DOM树的构建
    - 字节开始 网络层的传输
    - 转换 根据编码utf-8,html字符串
    - 令牌化 令牌 标签名 属性 解析
    - 转成一个DOM节点对象
    - <div id="box"></div>
        {
            type: 'div',
            attrs:{
                id:'box'
            },
            children:[
                {

                }
            ]
        }
    - DOM树构建完成
      - 与树数据结构的结合,在查找和操作这块,非常的高效,作为render的输入
  - 2. CSSOM树的构建
  - 3. DOM树 与 CSSOM树 结合,生成渲染树,renderTree
  - 4. Layout 概念 布局 BFC,结合盒子模型和大小计算
    - Layout 可以确定文档流的位置和大小,计算在屏幕中确切的位置
    - 应用规则和计算的过程
    - 平面

- 图层 z-index 离开文档流 absolute transform opacity ...
  - 新的图层来计算,绘制(修改的时候只要改这一个图层)
  - GPU 去计算,性能

- 绘制出来,画图
- 像素点
    

- 第一次的绘制
- 更新? JS, transition
  - 修改了它的颜色,背景颜色,重绘(性能还可以)
  - 改变了它的盒子,触发页面的重排(开销就大了), js width 的改变
  - transition left的修改, position: absolute; 离开文档流
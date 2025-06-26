# 回流重绘
- 布局的难点 列式布局和理解BFC/FFC
  - html 根元素 最外层的第一个BFC元素
    - BFC(Block Formatting Context) 块级从上到下，行内从左到右，BFC 格式化上下文
    - 有了文档流
  - float overflow:hidden flex
  - 有没有什么标签，可以做列式布局
    - tr td
  - 为什么不用表格做布局了？
    - 触发太多的回流和重绘
    - 语义不合 table数据表 页面上都是 tr（行row）、td（列column）
    - 不够灵活
  

## 回流和重绘
- reflow 回流，又叫“重排”
  - 当RenderTree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程叫回流。
    - table 不合适，table中局部的改变，会触发整个table的回流重排
      - 类似于“铁索连环”、”火烧赤壁”
    - display: none 不参与回流重绘，性能优化的一种方案
  - 触发回流（reflow 重排）的方式
  - 1. 页面首次渲染，严格意义不是， 0 -> 有 最耗时 网页每慢0.1s，少1000万
  - 2. 浏览器窗口的大小改变
  - 3. 元素尺寸或位置发生改变（transition, transform/opacity 新图层除外）
  - 4. 元素内容的变化
    - appendChild removeChild
  - 5. display: none block
  - 6. 字体大小的变化
  - 7. 激活css伪类 :hover
    - color: ? 浏览器需要重新计算元素的样式和布局
  - 8. 查询某些属性或调用某些方法时
    - img.getBoundingClientRect() 触发回流
        ret{

        }

- repaint 重绘
  - 当页面元素样式的改变并不影响其在文档流中的位置，只是简单的改变颜色color、背景background-color、是否可见visibility(hidden、show)等，不会触发回流重排
    - 比如改变一个div的背景颜色

## 页面是怎么渲染的？
- 输入url
- 下载html
  - 下载字节
  - html 字符 utf-8 编码
  - 解析html 开关标签 属性......
  - 节点对象
  - 构建DOM树
- link css 下载css
  - 下载字节码 Content-Type text/html text/css
  - 编码 utf-8 得到 css 文本
  - token 词法分析
  - css rule 节点
  - RenderTree
  - Layout树
    - 布局、盒模型、大小、确定元素在文档流中的位置和大小
  - 图层
    - z-index
    - position: fixed 弹窗
    - transition + transform / opacity
      - animation
    - translate(50%,50%,50%) Z GPU 加速
        1个图层 = DOM树 + CSSOM树 -> RenderTree -> LayoutTree
        2个图层 = DOM树 + CSSOM树 -> RenderTree -> LayoutTree
        ...
    - 图层的合并
    - 浏览器的渲染引擎 绘制平面 像素点绘制
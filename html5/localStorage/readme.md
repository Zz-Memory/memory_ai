# localStorage

- 全局安装stylus
  - npm install -g stylus
  - stylus --version
- stylus 为何物？  
  - 是一个css预处理器
  - 编译成css
    - 编译命令
      - stylus styl文件 -o css文件
    - 自动编译命令
      - stylus -w styl文件 -o css文件

- stylus 是 css 的超集
  - 浏览器还是只认 css
    - box-shadow 盒子的立体感觉
- css 有些熟悉直接继承
  - 每个都要写一遍，无法接受
  - 默认16px，颜色黑色
  - body color 子元素 body
  - 有些也不会继承

- background-size: cover; 等比例缩放，裁剪 重点在盒子
- contain 重点在背景 完整显示背景图片

- css 如js一样，可以写函数
  - 模块特性
    - tab缩进 自动补全css前缀
    - 模块和作用域的概念
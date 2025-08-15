# Github 最受欢迎 50 projects 50 days
- 布局
  - 居中
    - pos:a（定位元素） + transform（变基） translate/rotate/scale（自身 移动）
    - 5个元素的一行布局
- JS 交互

1. 合适的标签 BEM 类名
2. 弹性布局的居中方案
   - flex 是移动端时代（PC时代）新的布局方式
     - 弹性的布局格式化上下文 display:flex
     - align-items 纵轴
     - justify-content 主轴
     - .container 居中
     - 父元素和子元素们之间的布局方案
       - 子元素们不会换行
   - 100vh 相对单位
     - view height 不同设备但是等比例单位 100vh 屏幕高度
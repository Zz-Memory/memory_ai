# position

## 五种定位
### static（默认，不定位，回到文档流）
- 让之前定位的元素，回到文档流，取消定位
### relative（相对定位）
- 相对自身原位置偏移，不脱离文档流
### absolute（相对最近的非static祖先定位）
- 如果没有祖先是relative，就相对html定位
### fixed（相对于视窗定位）

### sticky（粘性定位，是一种css定位方式）
它让元素在滚动到特定阈值后固定在视口中，实现类似吸顶或吸附的效果


## 业务场景
- 结合 relative + absolute 消息提醒，在右上角
- absolute + transform 水平垂直居中 模态框
- fixed 回到顶部，聊天客服图标
- sticky 黏连导航，不管页面多长，导航在超出阈值后，一直都在
  - table 表头黏连，距离其最近的具有滚动机制的祖先容器的顶部
  - 和IntersectionObserver有点像

## 底层
- 定位参照系
  - absolute 最近position !== static 的祖先 || html
  - fixed 视窗 ？ bug
  - sticky 依赖滚动容器
- 独立图层渲染
  - absolute ? + ?

### 优化
- 适当使用transform: translate3d(0,0,0) 
  - GPU 硬件加速，有利于css页面性能优化
  - 但也不能乱用，过多的图层会增加内存和管理开销
    - 比如，登录弹窗，transform/opacity动画
#### 独立图层
- will-change 创建独立图层
- translate3d
- 注意：position: fixed如果在transform:translateZ(0)下面，会失效
  - transform会有一个新的包含块，fixed不再相对于视口定位，而是相对于这个transform容器
## 面试秘籍
- 像打麻将一样，每道题都有惊喜，刺激
  - 面试是当面展示自己，可以准备的
## position 回答技巧
先干净利落回答五种特性，再举出应用场景，提底层原理、图层和fixed失效亮点
- 页面的渲染过程
- intersectionObserver
- 重绘重排
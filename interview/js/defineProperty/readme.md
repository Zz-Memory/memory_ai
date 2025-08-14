# 响应式底层原理

- DOM API -> 响应式业务
- Object.defineProperty(obj,"value",{
    get,
    set
})

- 对象上某个属性的某些行为(get,set)进行定义，在完成本来的职责同时，去做dom更新
  - 这就是响应式
- 拦截行为
- obj.value
- Vue 这个现代的前端MVVM框架，早期用Object.defineProperty实现响应式，现在使用Proxy
- es6 Proxy 可以一次代理整个对象，代理的行为更多


## 属性描述符(Property description)
- configurable 可配置（是否允许删除改属性，或修改其他属性描述符）
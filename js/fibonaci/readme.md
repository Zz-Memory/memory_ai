# 面试官的考试思维

- 闭包思想
  - 大问题拆分为小问题（相似）
  - 退出条件
  - 重复计算
  - 爆栈（函数 要入调用栈的 执行上下文、作用域、变量环境、词法环境、outer维护作用域链、this、arguments）
- 升华
  - 递归的思考方式
    - 自顶向下
    - 树形结构

- js 闭包 记忆函数优化计算
  - memorizedFib 外层
    - 自由变量 cache
    - fib 递归执行
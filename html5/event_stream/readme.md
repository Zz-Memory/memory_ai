# 流式输出

- 为什么会考这道题？
  - 25年大厂必考题
    - LLM 聊天机器人（23年的AI爆款 -> 24年推理 -> 25年 AI Agent 年） AI 产品
    - 流式输出属于用户体验，前端职责所在

- 为何需要流式输出？
  - 边生成边输出？
    - 后端、LLM API 方式提供给我们？
    - AIGenerticContent 生成式 AI 产品


- 前端的职责
  - 良好的用户体验
  - 尽快反馈结果
- 障眼法 生成要花时间哦，我愿意等
- 最懂用户心理的


- 步骤：
  - 前端能实现流式输出？
    - setInterval 异步 事件监听机制 message
  - 后端又怎么实现？
    - socket 长连接
    - http 请求是基于请求响应式简单协议 关闭连接？
    - http 2.0 server push 服务器端推送
  
## 全栈能力
- npm init -y 创建node后端环境
- npm i express 老牌的node框架


## 要点
- sse 与 server push
- sse 与 socket 长连接的区别？
  - sse 单向通道，只能服务器端推送到客户端
  - socket 是全双工通道，双方都可以互相发送消息
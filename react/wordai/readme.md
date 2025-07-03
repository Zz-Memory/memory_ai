# 智能前端之单词学习

- 产品和商业模式
  - 学单词
  - 拍照记单词
    - 图片交给多模态模型 => word
    - deepseek aigc 例句
    - tts 发音
- focus
  - 拍照背单词，用单词
- 解决一些特定的效率性、创新型App

- npm init vite
  - vite 是工程化脚手架，构建工具
- npm install
  - react...之类的项目依赖下载慢，设置镜像 npm config set registry https://mirrors.huaweicloud.com/repository/npm/
  - pnpm 代替npm
    - 不同的项目中，重复安装了react
    - 可以讲react等包放到一个地方，如果之前安装过，链接过，就可以直接使用

## React 语法
- 单向数据流
  - 数据状态流动
  - 父组件负责提供 数据 和 API 接口请求
  - 拆成多个子组件
  - 数据会从父组件流向子组件
  - 子组件负责消费数据，专注于显示
  - props 传参
      <PictureCard
        uploadImage={uploadImage}
      ></PictureCard>
      像函数参数一样，可以解构

## 项目中一定要安排的技能点
- pnpm
- react 思想
  - 数据状态 useState
  - 数据驱动
  - 响应式：数据状态变化 => 视图自动更新
    - 不用频繁操作DOM，只需要关注业务
- 业务
  - 图片上传
    - 图片预览
- 组件化设计
  - App
    - 提供数据
    - 图片上传大模型
  - PictureCard
    - 单向数据流
      - 子组件只负责消费数据
      - 父组件负责提供数据，数据的请求
      - 先要给父组件
- 性能优化
  - linear-gradient 渐变色，代替图片作为背景
- 用户体验
  - 上传图片功能，预览上传图片功能
  - 无障碍访问
    - label for + input#id
- es6 新特性
  - 可选链操作符
- html5 功能
  - file 文件对象
- 智能
  - 多模态模型
  - 月之暗面 base64
  - prompt
    - 介绍 prompt 设计原则
      - 给它一个明确的身份 LLM交流 当人
      - 清晰且具体的任务
      - 限制，指定结果
        - 返回的结构 JSON
        - 有利于接下来的业务执行
        - 拿着大模型的回答，接着干活
        - JSON 最好的接口格式
      - 分步做

"{
  "image_description": "A cartoon turtle wearing goggles and a red cap is riding a surfboard with a lightning bolt design. The turtle appears to be surfing at high speed, indicated by the motion lines in the background.",
  "representative_word": "turtle",
  "example_sentence": "The turtle is surfing on a board.",
  "explanation": "Look at the image. The main character is a turtle.\nIt is wearing a red cap and goggles.\nThe turtle is on a surfboard.\nIt seems to be moving very fast.\nTurtles are reptiles that live in water and on land.\nDo you know any other animals that live in water?",
  "explanation_reply": [
    "Dolphins live in water.",
    "Fish are another example of water-dwelling animals."
  ]
}
"
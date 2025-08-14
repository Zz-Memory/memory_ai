<script setup>
// MVVM 响应式，数据绑定，状态管理，生命周期，Hooks
// 页面上晃来晃去，显示鼠标的x,y坐标
// 三明治
import { ref } from 'vue';
import useMouse from './hooks/useMouse';
import useTodos from './hooks/useTodos'
const { x, y } = useMouse();
const {
  title,
  todos,
  addTodo,
  clear,
  active,
  all,
  allDone
} = useTodos();
</script>

<template>
  <div>
    <!-- 数据绑定 -->
    {{ x }} {{ y }}
    <div>
      <!-- v-model 双向绑定指令 -->
      <!-- vue的事件绑定 @ 修饰符 enter -->
      <input type="text" v-model="title" @keydown.enter="addTodo" />
      <!-- v-if vue的渲染指令 true则渲染，false则不渲染 -->
      <button v-if="active < all" @click="clear">清理</button>
      <ul v-if="todos.length">
        <!-- v-for vue的循环指令-->
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span>{{ todo.title }}</span>
        </li>
      </ul>
      <div v-else>暂无数据</div>
      <div>
        全选
        <input type="checkbox" v-model="allDone" />
        <span>{{ active }} / {{ all }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

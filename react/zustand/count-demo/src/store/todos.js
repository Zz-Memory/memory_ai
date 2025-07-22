// todoList store
// 全局状态模块化
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todoList: [
    {
      id: 1,
      text: "打豆豆",
      completed: false,
    },
  ],
  addTodo: (text) =>
    set((state) => ({
      todoList: [
        ...state.todoList,
        {
          id: state.todoList.length + 1,
          text,
          completed: false,
        },
      ],
    })),
    toggleTodo: (id) => set((state) => ({
      todoList: state.todoList.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      })),
    })),
    deleteTodo: (id) => set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));

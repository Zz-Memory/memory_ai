import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';

export default function useMouse() {
    const x = ref(0);
    const y = ref(0);
    const updateMousePosition = (event) => {
        x.value = event.clientX;
        y.value = event.clientY;
    }
    onMounted(() => { // 钩子函数
      console.log('组件挂载了');
      window.addEventListener('mousemove', updateMousePosition);
    });
    onUnmounted(() => {
      console.log('组件卸载了');
      window.removeEventListener('mousemove', updateMousePosition);
    });
    return {
        x,
        y
    }
}
import {
    ref,
    computed, // 计算属性
} from 'vue'

export default function useTodos() {
    const title = ref('');
    const todos = ref([
        {
            id: 1,
            title: '学习Vue',
            done: false
        }
    ])
    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = '';
    }

    function clear() {
        // done为false 留下，已完成的清除
        todos.value = todos.value.filter((v) => !v.done);
    }
    // 未完成的todos的数量
    const active = computed(() => {
        return todos.value.filter((v) => !v.done).length;
    })

    const all = computed(() => {
        return todos.value.length;
    })

    const allDone = computed({
        get: function() {
            return active.value === 0;
        },
        set: function(value) {
            todos.value.forEach(todo => {
                todo.done = value;
            })
        }
    })
    return {
        title,
        todos,
        addTodo,
        clear,
        active,
        all,
        allDone
    }
}
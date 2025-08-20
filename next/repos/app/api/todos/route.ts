import {
    NextResponse // res
} from 'next/server'; // api server

// ts 是 js 的超集
import {type Todo} from '@/app/types/todo';

let todos: Todo[] = [
    {
        id: 1,
        text: '去广州',
        completed: false
    },
    {
        id: 2,
        text: '去深圳',
        completed: false
    }
];

// Restful 一切皆资源
// 向用户暴露资源
// method + 资源URL定义规则
export async function GET() {
    return NextResponse.json(todos);
}

export async function POST(request: Request) {
    // 获取请求体
    const body = await request.json();
    // 核心的数据，函数的参数和返回值
    const newTodo = {
        id: + Date.now(),
        text: body.text,
        // typescript 除了强类型外，代码提示更好，写起来更快
        completed: false
    }
    // 添加到todos
    todos.push(newTodo);
    // 返回响应
    return NextResponse.json(newTodo); 
}


export async function PUT(request: Request){
    const body = await request.json();
    todos = todos.map(todo => 
        todo.id === body.id ? {...todo, completed: body.completed} : todo
    );
    return NextResponse.json(todos);
}

// restful 简历
export async function DELETE(request: Request) {
    const body = await request.json();
    todos = todos.filter(todo => todo.id !== body.id);
    return NextResponse.json(todos);
}


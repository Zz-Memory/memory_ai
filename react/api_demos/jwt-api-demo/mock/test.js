export default [
    {
        url: '/api/todos',
        method: 'GET',
        response: () => {
            const todos = [
                {
                    id: 1,
                    title: 'todo 1',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'todo 2',
                    completed: true,
                },
            ]
            return {
                code: 0, // 没有错误
                msg: 'success',
                data: [
                    ...todos,
                ]
            }
        }
    },
    {
        url: '/api/repos',
        method: 'GET',
        response: () => {
            const repos = [
                {
                    id: 1,
                    name: 'repo 1',
                },
                {
                    id: 2,
                    name: 'repo 2',
                },
            ]
            return {
                code: 0, // 没有错误
                msg: 'success',
                data: [
                    ...repos,
                ]
            }
        }
    }
]
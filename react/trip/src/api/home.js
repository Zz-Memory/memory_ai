import axios from '@/api/config'

export const getImages = (page) => {
    // 当前写法：使用 params 配置（推荐）
    return axios.get('/images', {
        params: { page }
    });
    
    // 替代写法：直接拼接 URL（不推荐）
    // return axios.get(`/images?page=${encodeURIComponent(page)}`);
}
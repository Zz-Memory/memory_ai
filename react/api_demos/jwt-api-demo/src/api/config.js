// 标准的http请求库，vue、react都使用它
import axios from 'axios';
// mock 地址
// axios.defaults.baseURL = 'http://localhost:5173';

// 线上地址
axios.defaults.baseURL = "https://api.github.com/users/Zz-Memory";
export default axios;
import axios from "axios"; // http 请求库

// http 请求时，所有接口地址的公共部分
const BASE_URL = 'https://api.github.com'; // 基础地址

// axios 标准http请求库
// axios method url
// promise 现代
// api 模块 应用之外 搞外交
export const getRepos = async (username) => {
  return await axios.get(`${BASE_URL}/users/${username}/repos`);
}

export const getReposReadme = async (username, repoName) => {
  return await axios.get(`${BASE_URL}/repos/${username}/${repoName}/readme`);
}
import axios from '@/api/config'
export const getRepo = async (owner,repo) => {
    const res = await axios.get(`/users/${owner}/${repo}`)
    return res;
}

export const getRepoList = async (owner) => {
    const res = await axios.get(`/users/${owner}/repos`)
    return res;
}
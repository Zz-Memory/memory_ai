import axios from '@/api/config'

export const getDetail = async (id) => {
  return axios.get(`/detail/${id}`)
}
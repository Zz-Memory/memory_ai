import {
    create 
} from 'zustand'
import { getDetail } from '@/api/detail'

const useDetailStore = create((set) => ({
  detail: {
    id: "",
    title: "正在加载",
    price: 0,
    images: [
      {
        url: "https://dummyimage.com/300x200/79f291/fff&text=%E5%9B%BE%E7%89%87'",
        alt: "图片",
      },
    ],
    desc: "",
  },
  loading: false,
  setDetail: async (id) => {
    set({ loading: true });
    const res = await getDetail(id);
    set({
      loading: false,
      detail: res.data,
    });
  },
}));

export default useDetailStore
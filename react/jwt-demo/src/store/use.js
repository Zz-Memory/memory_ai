import { create } from "zustand";
import { doLogin } from "@/api/user";

export const useUserStore = create((set) => ({
  user: null, // 用户信息
  isLogin: false, // 是否登录
  login: async ({ username = "", password = "" }) => {
    const res = await doLogin({ username, password });
    const { token, data: user } = res.data;
    // // axios响应的结构是{data: responseData, ...}，而responseData的结构是{code, msg, token, data}
    // console.log(res.data, '---------');
    // const {token, data} = res.data;
    // const user = data;

    console.log(token, user, "---------");
    localStorage.setItem("token", token);
    set({
      user,
      isLogin: true,
    });
  },
  loginOut: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      isLogin: false,
    });
  },
  clearUser: () => {
    set({ user: null, isLogin: false });
  },
}));

// login 模块 mock
export default [
  {
    url: "/api/login",
    method: "POST",
    timeout: 2000, // 请求耗时
    response: (req, res) => {
      const { username, password } = req.body;
      if (username === "admin" && password === "123456") {
        return {
          code: 200,
          msg: "登录成功",
          data: {
            username,
            password,
          },
        };
      }
    },
  },
];

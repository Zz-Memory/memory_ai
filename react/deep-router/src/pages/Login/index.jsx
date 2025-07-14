import { useState } from "react";
import {
  useNavigate, // Navigate组件，js跳转
  useLocation,
} from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  //   console.log(location.state.from);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username, password);
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLogin", "true");
      // 登录成功，跳转到原来的页面
      navigate(location?.state?.from || "/");
    } else {
      alert("用户名或密码错误");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>登录页面</h1>
      <input
        type="text"
        placeholder="请输入用户名"
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="请输入密码"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">登录</button>
    </form>
  );
};

export default Login;

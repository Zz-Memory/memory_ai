import {
  useRef
} from "react";
import {
  useUserStore
} from "@/store/use";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {login} = useUserStore();
  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!username || !password) {
      alert("请输入用户名或密码")
      return;
    }
    login({username, password});
    setTimeout(()=>{
      navigate('/');
    },1000)
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} type="text" id="username" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" id="password" placeholder="请输入密码" required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

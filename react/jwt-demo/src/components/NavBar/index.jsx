import { Link } from "react-router-dom";
import { useUserStore } from "@/store/use";

const NavBar = () => {
  const { isLogin, user, loginOut } = useUserStore();
  console.log(isLogin, user, "---------------");
  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/pay">Pay</Link>&nbsp;&nbsp;
      {isLogin ? (
        <>
          <p>欢迎：{user.username}</p>
          <button onClick={loginOut}>LogOut</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;

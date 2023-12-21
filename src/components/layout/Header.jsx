import React, { useEffect } from "react";
import styles from "../scss/layout.module.scss";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../utils/atom";

const Header = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const handleMoveToMain = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
    setIsLogin(false);
  };
  const handleLogout = () => {
    navigate("/login");
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };
  const handleSignUp = () => {
    navigate("/signUp");
  };

  useEffect(() => {
    const loginStorage = localStorage.getItem("isLogin");
    if (loginStorage === "true") {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <header className="fixed t-0 l-0 w-full flex justify-between py-3 px-4 shadow-md ">
      <h1 className={styles["logo"]} onClick={handleMoveToMain}>
        Logo
      </h1>
      <nav>
        <ul className={[styles["btn-group"], "flex gap-2"].join(" ")}>
          <li>
            {isLogin ? (
              <button onClick={handleLogout}>로그아웃</button>
            ) : (
              <button onClick={handleLogout}>로그인</button>
            )}
          </li>
          <li>
            <button>User</button>
          </li>
          <li>
            <button onClick={handleSignUp}>Sign Up</button>
          </li>
          <li>
            <button>글쓰기</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

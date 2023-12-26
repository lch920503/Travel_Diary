import React, { useEffect } from "react";
import "../scss/layout.scss";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../utils/atom";

const Header = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const handleMoveToMain = () => {
    navigate("/");
  };

  const handleLogBtn = () => {
    navigate("login");
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  const handleSignUp = () => {
    navigate("signUp");
  };

  const handleWrite = () => {
    navigate("contents/write");
  };

  useEffect(() => {
    const loginStorage = localStorage.getItem("isLogin");
    if (loginStorage === "true") {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <header className="fixed t-0 l-0 w-full flex justify-between py-3 px-4 shadow-md bg-white">
      <h1 className="logo" onClick={handleMoveToMain}>
        Logo
      </h1>
      <nav>
        <ul className="btn-group">
          <li>
            <button onClick={handleLogBtn}>
              {isLogin ? "로그아웃" : "로그인"}
            </button>
          </li>
          <li>
            <button onClick={!isLogin && handleSignUp}>
              {isLogin ? "사용자" : "회원가입"}
            </button>
          </li>
          <li>
            <button onClick={handleWrite}>글쓰기</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

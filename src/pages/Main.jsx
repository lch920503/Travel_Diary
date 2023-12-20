import React from "react";
import styles from "./main.module.scss";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import { useRecoilValue } from "recoil";
import { isLoginState, isSignUpState } from "../utils/atom";

const Main = () => {
  const isLogin = useRecoilValue(isLoginState);
  const isSignUp = useRecoilValue(isSignUpState);

  return (
    <main className={[styles["main"], "px-4 pt-12 pb-2"].join(" ")}>
      <h1>메인 홈입니다</h1>
      {isLogin && <Login />}
      {isSignUp && <SignUp />}
    </main>
  );
};

export default Main;

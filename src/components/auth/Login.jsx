import React from "react";
import "../scss/login.scss";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { QueryKeys } from "../../queryClient";
import { getUserFetch } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoginState } from "../../utils/atom";

const Login = () => {
  const setIsLogin = useSetRecoilState(isLoginState);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();

  const {
    data: userInfoData,
    isLoading,
    status,
  } = useQuery({
    queryKey: [QueryKeys.USER],
    queryFn: getUserFetch,
  });

  const onSubmit = (data) => {
    const filteredId = userInfoData?.filter(
      (item) => item.email === data.email
    );
    const filteredPw = filteredId.filter(
      (item) => item.password === data.password
    );

    if (filteredPw.length === 1) {
      navigate("/");
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
    } else {
      setError(
        "password",
        { message: "아이디 또는 비밀번호가 올바르지 않습니다" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {status === "success" && (
            <main className="login-main">
              <h1 className="title">로그인</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                  <label>이메일</label>
                  <input
                    type="text"
                    id="email"
                    {...register("email", {
                      required: "이메일 주소를 입력해주세요",
                      pattern: {
                        value:
                          /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                        message: "이메일 주소가 올바르지 않습니다",
                      },
                    })}
                  />
                  <span>{errors.email?.message}</span>
                </div>
                <div className="input-box">
                  <label>비밀번호</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: {
                        value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/,
                        pattern: "비밀번호를 확인해주세요",
                      },
                    })}
                  />
                  <span>{errors.password?.message}</span>
                </div>
                <button type="submit" className="btn-login">
                  로그인
                </button>
              </form>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default Login;

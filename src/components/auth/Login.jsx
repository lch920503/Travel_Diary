import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { QueryKeys } from "../../queryClient";
import { getUserFetch } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../utils/atom";

const Login = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const {
    handleSubmit,
    register,
    formState: { errors },
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
      navigate("/mypage");
      setIsLogin(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {status === "success" && (
            <>
              <h1>Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
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
                <div>
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
                <button type="submit">로그인</button>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Login;

import React, { useState } from "react";
import styles from "../scss/main.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { postUserFetch } from "../../data/api";
import { QueryKeys } from "../../queryClient";
import { useSetRecoilState } from "recoil";
import { isLoginState, isSignUpState } from "../../utils/atom";

const SignUp = () => {
  const [userData, setUserData] = useState(null);

  const isLogin = useSetRecoilState(isLoginState);
  const isSignUp = useSetRecoilState(isSignUpState);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate: userInfo } = useMutation({
    mutationFn: (info) => postUserFetch(info),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.USER],
        refetchType: "active",
      });
    },
    onError: () => {
      console.error("error");
    },
  });

  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        {
          message: "비밀번호가 일치하지 않습니다",
        },
        { shouldFocus: true }
      );
    }

    isLogin(true);
    isSignUp(false);

    const user = {
      id: new Date(),
      name: data.nickname,
      email: data.email,
      password: data.password,
    };
    userInfo(user);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <div className="flex gap-2 items-center h-7">
          <p>아이디</p>
          <input
            type="text"
            className="h-full p-2"
            id="email"
            placeholder="아이디를 입력해주세요"
            {...register("email", {
              required: "이메일 주소를 입력해주세요",
              pattern: {
                value:
                  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                message: "이메일 형식으로 입력해주세요",
              },
            })}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div className="flex gap-2 items-center h-7">
          <p>비밀번호</p>
          <input
            type="password"
            className="h-full p-2"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: "패스워드를 입력해주세요",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/,
                message: "비밀번호는 영문 및 숫자 조합으로 입력해주세요",
              },
              minLength: {
                value: 4,
                message: "패스워드는 4자리 이상 입력해주세요",
              },
              maxLength: {
                value: 12,
                message: "패스워드는 12자리 이하로 입력해주세요",
              },
            })}
          />
          <span>{errors.password?.message}</span>
        </div>
        <div className="flex gap-2 items-center h-7">
          <p>비밀번호 확인</p>
          <input
            type="password"
            className="h-full p-2"
            id="passwordCheck"
            placeholder="비밀번호를 입력해주세요"
            {...register("passwordCheck", {
              required: "패스워드를 입력해주세요",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/,
                message: "비밀번호는 영문 및 숫자 조합으로 입력해주세요",
              },
              minLength: {
                value: 4,
                message: "패스워드는 4자리 이상 입력해주세요",
              },
              maxLength: {
                value: 12,
                message: "패스워드는 12자리 이하로 입력해주세요",
              },
            })}
          />
          <span>{errors.passwordCheck?.message}</span>
        </div>
        <div className="flex gap-2 items-center h-7">
          <p>닉네임</p>
          <input
            type="text"
            className="h-full p-2"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
              minLength: {
                value: 3,
                message: "닉네임은 3자 이상 입력해주세요",
              },
              maxLength: {
                value: 8,
                message: "닉네임은 8자 이하로 입력해주세요",
              },
            })}
          />
          <span>{errors.nickname?.message}</span>
        </div>
        <button type="submit" className={styles["btn-signup"]}>
          회원가입
        </button>
      </form>
    </main>
  );
};

export default SignUp;

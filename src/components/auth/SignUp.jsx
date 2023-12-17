import React from "react";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        {
          message: "비밀번호가 일치하지 않습니다",
        },
        { shouldFocus: true }
      );
    } else {
      localStorage.setItem("email", data.email);
      localStorage.setItem("nickname", data.nickname);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <p>아이디</p>
        <input
          type="text"
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
      <div className="">
        <p>비밀번호</p>
        <input
          type="password"
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
      <div className="">
        <p>비밀번호 확인</p>
        <input
          type="password"
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
      <div className="">
        <p>닉네임</p>
        <input
          type="text"
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
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SingUp;

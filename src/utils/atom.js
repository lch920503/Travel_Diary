import { atom } from "recoil";

export const isSignUpState = atom({
  key: "isSignUpState",
  default: false,
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

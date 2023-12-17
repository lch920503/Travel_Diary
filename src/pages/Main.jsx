import React from "react";
import styles from "./main.module.scss";
import SignUp from "../components/auth/SignUp";

const Main = () => {
  return (
    <main className={[styles["main"], "px-4 pt-12 pb-2"].join(" ")}>
      <SignUp />
    </main>
  );
};

export default Main;

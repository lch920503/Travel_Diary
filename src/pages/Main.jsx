import React from "react";
import styles from "../components/scss/main.module.scss";

const Main = () => {
  return (
    <main className={[styles["main"], "px-4 pb-2"].join(" ")}>
      <h1>메인 홈입니다</h1>
    </main>
  );
};

export default Main;

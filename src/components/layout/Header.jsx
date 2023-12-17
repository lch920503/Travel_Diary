import React from "react";
import styles from "./layout.module.scss";

const Header = () => {
  const handleSignUp = () => {};
  return (
    <header className="fixed t-0 l-0 w-full flex justify-between py-2 px-4 shadow-md ">
      <h1 className={styles["logo"]}>Logo</h1>
      <nav>
        <ul className={[styles["btn-group"], "flex gap-2"].join(" ")}>
          <li>로그인</li>
          <li>User</li>
          <li onClick={handleSignUp}>Sign Up</li>
          <li>글쓰기</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

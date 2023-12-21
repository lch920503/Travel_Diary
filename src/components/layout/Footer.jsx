import React from "react";
import styles from "../scss/layout.module.scss";

const Footer = () => {
  return (
    <footer className={[styles["footer"], "px-4 py-2"].join(" ")}>
      Footer
    </footer>
  );
};

export default Footer;

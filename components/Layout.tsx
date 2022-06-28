import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

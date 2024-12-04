import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import ProgressBar from "../../molecules/ProgressBar/ProgressBar";
import styles from "../MainLayout/MainLayout.module.css";
const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <ProgressBar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;

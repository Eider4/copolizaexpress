// import React from "react";
// import MainLayout from "../../components/template/MainLayout/MainLayout";
import styles from "./styles.module.css";
import icon_left from "../../../assets/png/Icon-left.png";
import MainLayout from "../../template/MainLayout/MainLayout";

const Navbar = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div>
          <p className={`${styles.title} ${styles.grey}`}>Póliza Express</p>
          <img src={icon_left} alt="icon_left" className={styles.arrow} />
          <p className={`${styles.title} ${styles.grey}`}>
            Mis negocios en línea
          </p>
          <img src={icon_left} alt="icon_left" className={styles.arrow} />
          <p className={`${styles.title} ${styles.blue}`}>Nueva cotización</p>
        </div>
        <button className={styles.button}>Ir a mis negocios</button>
      </div>
    </MainLayout>
  );
};

export default Navbar;

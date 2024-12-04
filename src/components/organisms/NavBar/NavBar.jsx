import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import logo from "../../../assets/png/Logo-Principal.png";
import Profile from "../../../assets/png/Profile.png";
import page_tab from "../../../assets/png/page-tab.png";
import Modal from "../../molecules/Modal/Modal1/ModalBase.jsx";


const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.rightSection}>
        <img src={page_tab} alt="page_tab" />
        <span className={styles.name}>Andrés Salamanca</span>
        <img src={Profile} alt="Profile" className={styles.profile} />
        <button className={styles.button}>Cerrar sesión</button>
      </div>

      {/* {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>¿Estás seguro de que deseas cerrar sesión?</h3>
            <div className={styles.modalButtons}>
              <button onClick={handleLogout} className={styles.confirmButton}>
                Sí, cerrar sesión
              </button>
              <button onClick={closeModal} className={styles.cancelButton}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default NavBar;

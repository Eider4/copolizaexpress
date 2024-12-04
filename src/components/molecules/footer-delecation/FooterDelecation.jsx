import React from "react";
import styles from "./style.module.css";

export const FooterDiligenciación = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div className={styles.container1}>
          <img src="/public/fallo.svg" alt="#" />
        </div>
        <div className={styles.container2}>
          <span className={styles.span}>No olvides diligenciar el SARLAFT</span>
        </div>
        <div>
          <p className={styles.parrafo}>
            Si aún no lo tienes descargar el formato en el siguiente enlase
          </p>
        </div>
      </div>
      <div className={styles.container3}>
        <a className={styles.link}>Descargar formato SARLAFT</a>
      </div>
    </div>
  );
};

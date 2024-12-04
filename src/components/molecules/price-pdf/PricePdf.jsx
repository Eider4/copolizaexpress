import React from "react";
import styles from "./style.module.css";


export const CotizacionPdf = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/public/cotizaccionpdf.svg" alt="#" />
      </div>
      <div className={styles.parrafo}>
        <a>Generar cotización en PDF</a>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

export default function Calificasion() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setVisible(true);
    }, 30000);

    return () => clearTimeout(tiempo);
  }, []);

  if (!visible) return null;
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setVisible(false)}>
        <img src="/public/IconClose.svg" alt="#" />
      </div>
      <div>
        <img src="/public/mainLogo.svg" alt="#" />
      </div>
      <div className={styles.parrafo}>
        <p>¿Fue fácil la tarea que acabas de completar? </p>
      </div>
      <div>
        <div className={styles.contenedorCaritas}>
          <div className={styles.carita}>
            <img src="/public/happy.svg" alt="#" />
            <p>Fácil</p>
            <img src="/public/withFilling.svg" alt="#" />
          </div>
          <div className={styles.carita}>
            <img src="/public/regularFace.svg" alt="#" />
            <p>Más o menos</p>
            <img src="/public/withoutFilling.svg" alt="#" />
          </div>
          <div className={styles.carita}>
            <img src="/public/sad.svg" alt="#" />
            <p>Difícil</p>
            <img src="/public/withoutFillingTwo.svg" alt="#" />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.plaseholder}>Enviar</button>
      </div>
      <div className={styles.parrafito}>
        <p>Powered by Qualtrics</p>
      </div>
    </div>
  );
}

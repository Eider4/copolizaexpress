import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";
import Triangle from "../../../assets/png/Triangle.png";

const ProgressBar = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("steps")) || [
      { id: 1, text: "Validación de datos", state: "completed" },
      { id: 2, text: "Información del vehículo", state: "completed" },
      { id: 3, text: "Información personal", state: "none" },
      { id: 4, text: "Cotización", state: "none" },
    ];
    localStorage.setItem("steps", JSON.stringify(data));
    setSteps(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span className={styles.title}>Cotización</span>
        <strong className={styles.id}>100030819</strong>
      </div>
      <div className={styles.container2}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepContainer}>
            {/* bolita */}
            <div className={`${styles.stepNumber} ${styles[step.state]} `}>
              {index + 1}
            </div>
            {/* informacion */}
            <span
              className={`${styles.stepText} ${
                step.state !== "completed" ? styles.cotizacionFinal : ""
              }`}
            >
              {step.text}
            </span>
            {/* divicion */}
            {index < steps.length - 1 && (
              <div
                className={`${styles.divider} ${
                  index === 2 ? styles.divider3 : ""
                }`}
              />
            )}
          </div>
        ))}
        <img src={Triangle} alt="Triangle" className={styles.triangle} />
      </div>
    </div>
  );
};

export default ProgressBar;

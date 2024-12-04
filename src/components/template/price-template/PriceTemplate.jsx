import React from "react";
import styles from "./styles.module.css";
import PlansPrice from "../../organisms/PlansPrice";
import { Footer } from "../../molecules/Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function PriceTemplate() {
  const navigate = useNavigate();
  return (
    <div className={styles.div_father}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1 className={styles.title}>Cotización</h1>
        <p className={styles.sub_title}>
          Listo, te sugerimos un paquete recomendado, sin embargo puedes
          personalizarlo de acuerdo a la necesidad.
        </p>
      </div>
      <div className={styles.div_plan_price}>
        <PlansPrice />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4em",
          marginBottom: "7em",
        }}
      >
        <Footer
          ruta="/price"
          type={4}
          functionContinuar={() => navigate("/")}
          functionVolver={() => navigate(-1)}
          functionGuardar={() => console.log("guardar")}
        />
      </div>
    </div>
  );
}

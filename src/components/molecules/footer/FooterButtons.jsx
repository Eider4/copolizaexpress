import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useEffect } from "react";
import { validateForm } from "../../infoPerson/validatedForm";

export default function FooterButtons({
  type,
  functionContinuar,
  functionVolver,
  functionGuardar,
}) {
  const navigate = useNavigate();
  const action = (act) => {
    let data = JSON.parse(localStorage.getItem("steps"));
    if (data) {
      if (act == "volver") {
        data[type - 1].state = "none";
        navigate(-1);
      }
      if (act == "guardar") {
        data[type - 1].state = "pending";
        // navigate("/");
      }
      if (act == "continuar") {
        data[type - 1].state = "completed";
      }
      localStorage.setItem("steps", JSON.stringify(data));
    }
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("steps")) || null;
    if (data && data[type - 1]) {
      data[type - 1].state = "pending";
      localStorage.setItem("steps", JSON.stringify(data));
    }
  }, [type]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => {
          action("volver");
          functionVolver();
        }}
        className={styles.buttonVolver}
      >
        Volver
      </button>
      <button
        onClick={() => {
          action("guardar");
          functionGuardar();
        }}
        className={styles.button}
      >
        Guardar y salir
      </button>
      <button
        onClick={() => {
          action("continuar");
          functionContinuar();
        }}
        className={styles.button}
      >
        Continuar
      </button>
    </div>
  );
}

import React, { useState } from "react";
import styles from "../Modal1/Modal.module.css";
import AlertIcon from "../../../../assets/Alert.svg";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const ModalBase = ({
  show,
  onClose,
  title,
  buttonText,
  ruteNext = "/inf-person",
  text1 = (
    <>
      No podemos continuar con la<b> cotización</b> en este momento debido a
      problemas técnicos."
    </>
  ), // Nueva prop
}) => {
  const [retryClicked, setRetryClicked] = useState(true);
  const navigate = useNavigate();

  const handleRetry = () => {
    setRetryClicked(true);
  };

  const handleGoToBusiness = () => {
    onClose();
    navigate(ruteNext);
  };

  if (!show) return null;

  return (
    <Modal
      open={show}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropProps={{
        className: styles.modalBackdrop,
      }}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <img className={styles.alertIcon} src={AlertIcon} alt="Alerta" />
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalText}>{text1}</p>
          {!retryClicked ? (
            <p className={styles.modalText}>
              Por favor, intenta nuevamente a través del botón{" "}
              <span className={styles.bold}>Reintentar.</span> <br /> Si el
              error persiste, retoma la cotización en unos minutos desde <br />
              <span className={styles.bold}>Mis Negocios</span>.
            </p>
          ) : (
            <p className={styles.modalText}>
              Reporta la falla en la mesa de ayuda al correo{" "}
              <a
                href="mailto:soporte.aplicativos@libertycolombia.com"
                className={styles.contactLink2}
              >
                soporte.aplicativos@libertycolombia.com
              </a>
            </p>
          )}
          <p className={styles.modalText}>
            Número de cotización{" "}
            <span className={styles.quoteNumber}>100030819</span>
          </p>
        </div>

        <div className={styles.modalFooter}>
          {retryClicked ? (
            <button onClick={handleGoToBusiness} className={styles.button2}>
              Ir a Mis Negocios
            </button>
          ) : (
            <>
              <button onClick={onClose} className={styles.secondaryButton}>
                {buttonText || "Mis Negocios"}
              </button>
              <button onClick={handleRetry} className={styles.primaryButton}>
                Reintentar
              </button>
            </>
          )}
        </div>
        <FooterPopup />
      </div>
    </Modal>
  );
};

export default ModalBase;

export function FooterPopup() {
  return (
    <div className={styles.modalExtraInfo}>
      <p className={styles.additionalText}>
        Para obtener información adicional comunícate con la mesa de ayuda al
        correo <br />
        <a
          href="mailto:soporte.aplicativos@libertycolombia.com"
          className={styles.contactLink}
        >
          soporte.aplicativos@libertycolombia.com
        </a>
      </p>

      <p className={styles.errorDetails}>
        Código de error: 1234 - Paso 3: Información personal <br /> 21/Jul/2022
        - 13:15
      </p>
    </div>
  );
}

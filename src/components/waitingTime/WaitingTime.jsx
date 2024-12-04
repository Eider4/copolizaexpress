import React, { useEffect, useState } from "react";
import SessionTimeout from "../../components/molecules/Modal/SessionTimeout/SessionTimeout.jsx";
import stylesSeccionEnd from "../../components/molecules/Modal/SessionTimeout/SessionTimeout.module.css";
import cerrar from "../../assets/Cerrar.svg";
import Esclamacion from "../../assets/Esclamacion.svg";

export default function WaitingTime() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [countdownTimer, setCountdownTimer] = useState(null); // Para controlar el temporizador

  useEffect(() => {
    let inactivityTimeout;
    const startCountdown = () => {
      setCountdownTimer(
        setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1 || timeLeft <= 1) {
              clearInterval(countdownTimer);

              return 0;
            }
            return prevTime - 1;
          });
        }, 1000)
      );
    };

    const resetInactivity = () => {
      if (!isModalOpen) {
        setTimeLeft(120);
        clearTimeout(inactivityTimeout);

        inactivityTimeout = setTimeout(() => {
          setIsModalOpen(true);
          startCountdown();
        }, 15000);
      }
    };

    if (!isModalOpen) {
      window.addEventListener("mousemove", resetInactivity);
    }

    resetInactivity();

    return () => {
      clearTimeout(inactivityTimeout);
      clearInterval(countdownTimer);
      window.removeEventListener("mousemove", resetInactivity);
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    clearInterval(countdownTimer);
    startCountdown();
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      setSessionEnded(true);
      setIsModalOpen(false);
    }
  }, [timeLeft]);
  return (
    <>
      <SessionTimeout
        show={isModalOpen}
        onClose={closeModal}
        setTimeLeft={setTimeLeft}
        setUserActive={""}
        setSessionEnded={setSessionEnded}
        sessionEnded={sessionEnded}
        setIsModalOpen={setIsModalOpen}
        timeLeft={timeLeft}
      />

      {sessionEnded && (
        <div className={stylesSeccionEnd.overlay}>
          <div className={stylesSeccionEnd.modal2}>
            <div className={stylesSeccionEnd.cerrar}>
              <img
                src={cerrar}
                alt="Cerrar"
                className={stylesSeccionEnd.Cerrar}
                onClick={() => setSessionEnded(false)}
              />
            </div>
            <div className={stylesSeccionEnd.leftSection}>
              <img
                src={Esclamacion}
                alt="Esclamacion"
                className={stylesSeccionEnd.esclamacion}
              />
            </div>
            <h2 className={stylesSeccionEnd.title}>Tu sesión ha finalizado.</h2>

            <div className={stylesSeccionEnd.buttons2}>
              <button
                className={stylesSeccionEnd.closeButton}
                onClick={() => setSessionEnded(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

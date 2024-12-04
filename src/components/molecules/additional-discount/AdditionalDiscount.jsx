import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import warningIcons from "../../../assets/svg/warningicons.svg";
import warningIcons2 from "../../../assets/svg/warning2.svg";
import CardDiscount from "../card-discount/CardDiscount";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import imgConyugal from "../../../assets/svg/Wedding_Ring_CMYK_Yellow.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Spiner from "../Spiner/Spiner";
import InputForm from "../../atoms/InputForm";
export const AdditionalDiscount = ({
  errorIdentificion,
  handleInput,
  conyuge: showPopup,
  setConyuge: setShowPopup,
}) => {
  const [selectValue, setSelectValue] = useState("0");
  const [numeroTI, setNumeroTI] = useState("");
  const [spiner, setSpiner] = useState(false);
  const [spinerText, setSpinerText] = useState(false);
  const handleCheckboxChange = (e) => {
    if (!e.target.checked) return setShowPopup(e.target.checked);
    setSpiner(true);
    setTimeout(() => {
      setSpiner(false);
      setShowPopup(e.target.checked); // Muestra el popup si el checkbox está marcado
    }, 2000);
  };
  const identidades = [
    { value: "opcion1", type: "0", label: "Cédula de ciudadanía" },
    { value: "opcion2", type: "1", label: "Cédula de extranjería" },
    { value: "opcion3", type: "2", label: "Carnet Diplomático" },
    { value: "opcion4", type: "0", label: "Pasaporte" },
    { value: "opcion5", type: "1", label: "Tarjeta de Identidad" },
    { value: "opcion6", type: "0", label: "Registro Civil" },
    { value: "opcion7", type: "1", label: "Permiso Especial de Permanencia" },
    { value: "opcion8", type: "2", label: "Documento de Identidad Consular" },
    { value: "opcion9", type: "0", label: "Certificado de Nacimiento" },
    {
      value: "opcion10",
      type: "2",
      label: "Número Único deIdentificación Personal (NIUP)",
    },
  ];

  useEffect(() => {
    if (numeroTI.length > 6 && selectValue) {
      setTimeout(() => {
        setSpiner(true);
        setTimeout(() => {
          setSpinerText(true);
          setTimeout(() => {
            setSpiner(false);
            setSpinerText(false);
          }, 2000);
        }, 3000);
      }, 2000);
    }
  }, [numeroTI, selectValue]);

  return (
    <>
      {spiner && <Spiner showText={spinerText} />}
      <div className={styles.container}>
        <div>
          <p className={styles.titulo}>Descuento adicional</p>
        </div>
        <div className={styles.checkboxGroups}>
          <form>
            <div className={styles.checkboxGroup}>
              <input
                style={{ marginTop: "10.5px" }}
                type="checkbox"
                onChange={handleCheckboxChange} // Control del checkbox
              />
              <p className={styles.titulo2}>
                Deseo utilizar el descuento de mi cónyuge
              </p>
            </div>
          </form>
        </div>
        <div>  
          
          <div className={styles.fallo}>
            <div className={styles.div_inf}>
              <div className={styles.div_inf1}>
                <img
                  className={styles.icons}
                  src={warningIcons}
                  alt="Warning Icon"
                />
                <p>
                  El uso del descuento del cónyuge estará sujeto a posteriores
                  revisiones y validaciones
                </p>
              </div>
              <div className={styles.inf2}>
                {" "}
                <p>
                  Se aplicará siempre el descuento más alto entre conductor y
                  cónyuge.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Popup */}
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.lineContainer}></div>
            <div className={styles.popupContent}>
              <p>
                Ingresa la identificación de tu cónyuge si quieres aplicar su
                descuento
              </p>
            </div>
            <div className={styles.inputContainer}>
              <select
                id="opciones"
                name="opciones"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className={styles.selectBox}
              >
                {identidades.map((option) => (
                  <option key={option.value} value={option.type}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div style={{ position: "relative" }}>
                {/* primerNombre */}
                {errorIdentificion.identificacionConyuge && (
                  <div className={styles.error_form}>
                    <img src={warningIcons2} alt="" />
                    <p>Este campo no puede quedar vacío</p>
                  </div>
                )}
                <InputForm
                  name="identificacionConyuge"
                  action={(e) => {
                    setNumeroTI(e.target.value);
                    handleInput(e);
                  }}
                  label={"Identificación"}
                  style={
                    errorIdentificion.identificacionConyuge
                      ? {
                          border: "#E92243 solid 2px",
                          backgroundColor: "#FAF1F1 ",
                          width: "340px",
                          flex: 1,
                          padding: "10px",
                          fontSize: "14px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#ffffff ",
                          width: "340px",
                          flex: 1,
                          padding: "10px",
                          fontSize: "14px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                        }
                  }
                />
              </div>
            </div>
            <div className={styles.divCardDiscount}>
              {!spiner && !spinerText && numeroTI && selectValue == "2" && (
                <CardDiscount
                  title="Descuento de cónyuge"
                  text1={"De acuerdo al expertis del conductor,"}
                  porcentaje={{
                    text: "20% OFF",
                    color: "#D32F2F",
                    textDescuento:
                      "No aplica por descuento menor. Se aplica descuento del conductor.",
                    icon: ErrorOutlineIcon,
                    bg: "#F9E1E1",
                    colorIcon: "#aa0000",
                    img: imgConyugal,
                  }}
                />
              )}
              {!spiner && !spinerText && numeroTI && selectValue == "1" && (
                <CardDiscount
                  title="Descuento de cónyuge"
                  text1={"De acuerdo al expertis del conductor,"}
                  porcentaje={{
                    text: "30% OFF",
                    color: "#28A3AF",
                    textDescuento:
                      "Aplica y se prioriza el descuento del conductor",
                    icon: CheckCircleOutlineIcon,
                    bg: "#E1F2E6",
                    colorIcon: "#00aa00",
                    img: imgConyugal,
                  }}
                />
              )}
            </div>
            {(spiner || !numeroTI || selectValue == "0") && (
              <div className={styles.cuadro}>
                %<br />
                El porcentaje de descuento de tu cónyuge es:
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

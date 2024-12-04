import React from "react";
import style from "./CardDiscount.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const CardDiscount = ({
  title = "Tienes un descuento",
  text1 = "De acuerdo al expertis del conductor,",
  porcentaje = {
    text: "20% OFF",
    color: "#28a3af",
    textDescuento: "Aplica descuento mayor",
    bg: "#E1F2E6",
    icon: CheckCircleOutlineIcon,
    colorIcon: "#00aa00",
    img: "Layer_2.svg",
  },
}) => {
  return (
    <div className={style.parentContainer}>
      <div className={style.CardDiscount}>
        <div className={style.bgImagen}>
          <img src="Group8.svg" alt="" height="222" width="505" />
          <img src={porcentaje.img} alt="" className={style.layer2Image} />
        </div>
        <div className={style.containerText}>
          <div className={style.title}>{title}</div>
          <div>
            {<div className={style.text}>{text1}</div>}
            <div className={style.text2}>el porcentaje de descuento es:</div>
          </div>
          <div style={{ color: porcentaje.color }} className={style.discount}>
            {porcentaje.text}
          </div>
          <div className={style.DivtextDescuento}>
            <div
              style={{ backgroundColor: porcentaje.bg }}
              className={style.textDescuento}
            >
              {/* <img src={img} alt="" /> */}
              <porcentaje.icon sx={{ color: porcentaje.colorIcon }} />
              <p>{porcentaje.textDescuento}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDiscount;

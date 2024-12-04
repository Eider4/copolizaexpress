import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import img_financing from "../../../assets/svg/CombinedShape.svg";
import premium from "../../../assets/svg/Grupo18933.svg";
import Triangle from "../../../assets/components/Triangle.jsx";
import oval from "../../../assets/svg/Oval.svg";
import ovalBlue from "../../../assets/svg/OvalBlue.svg";
import checked from "../../../assets/svg/checked.svg";

export default function CardPlan(plan) {
  const { setPlanSelect, planSelect, quantityPlans } = plan;

  const [width, setWidth] = useState("285px");
  const [height, setHeight] = useState("256px");
  useEffect(() => {
    console.log("quantityPlans", quantityPlans);
    if (quantityPlans == 4) {
      setWidth("285px");
      setHeight("256px");
      return;
    }
    if (quantityPlans == 3) {
      setWidth("382px");
      setHeight("256px");
      return;
    }
    if (quantityPlans == 2) {
      setWidth("576px");
      setHeight("261px");
      return;
    }
    if (quantityPlans == 1) {
      setWidth("1151px");
      setHeight(" 256px");
      return;
    }
  }, [quantityPlans]);

  return (
    <div>
      <div
        style={{
          transform: plan.name === "Premium" ? "scaleY(1.04)" : "scaleY(1)",
          transformOrigin: "bottom",
          width,
          height,
        }}
        className={
          planSelect?.name === plan.name ? styles.div_root2 : styles.div_root
        }
        onClick={() => setPlanSelect(plan)}
      >
        <img
          className={styles.img_premium}
          src={plan.name === "Premium" ? premium : ""}
        />
        <div className={styles.input_select}>
          <div style={{ position: "relative" }}>
            <img
              src={planSelect?.name === plan.name ? ovalBlue : oval}
              alt=""
            />
            <img
              style={{
                position: "absolute",
                top: "5px",
                left: "3.5px",
                width: "16px",
              }}
              src={planSelect?.name === plan.name ? checked : ""}
              alt=""
            />
          </div>
        </div>
        <h3 className={styles.name}>{plan.name.toUpperCase()}</h3>
        <p className={styles.price}>
          ${plan.price.toLocaleString("es-ES").replace(".", "'")}
        </p>
        <div className={styles.div_financing}>
          <img className={styles.financing_icon} src={img_financing} />
          <p>
            Financiación ${plan.price.toLocaleString("es-ES").replace(".", "'")}
            / {plan.financing.quotas} cuotas
          </p>
        </div>
        <div className={styles.div_show_details}>
          <p>Ver detalles</p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            height: `${plan.border_button.height}px`,
            width: "100%",
            backgroundColor: plan.border_button.color,
          }}
        >
          <div className={styles.triangle}>
            {planSelect?.name === plan.name && (
              <Triangle color={plan.border_button.color} size={100} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

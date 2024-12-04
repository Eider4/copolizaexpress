import styles from "./styles.module.css";
import img_financing from "../../../assets/svg/CombinedShape.svg";
import img_arrow_down from "../../../assets/svg/flechitaArriba.svg";
import TableCobertura from "./TableCobertura";
import TableAsistencia from "./TableAsistencia";
import { useState } from "react";
import IconsBackCircle from "../../../../public/IconsBackCircle.svg";
export default function InfPlans({ plan }) {
  const [infTables, setInfTables] = useState(true);

  return (
    <div className={styles.div_root1}>
      <div style={{ cursor: "pointer", backgroundColor: "red" }}>
        <img
          onClick={() => setInfTables(!infTables)}
          className={styles.img_arrow_down}
          src={infTables ? img_arrow_down :   IconsBackCircle}
          alt="img_arrow_down"
        />
      </div>
      
      <div className={styles.fallo}>
        <div className={styles.div_inf}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "0px",
            }}
          >
            <img className={styles.financing_icon} src={img_financing} />
            <p className={styles.p_inf}>
              En este plan no están seleccionadas las siguientes coberturas,
              puedes agregarlas de manera opcional:
            </p>
          </div>
          <p className={styles.p_inf_2}>
            - Pérdida parcial por daños y Pérdida parcial por hurto
          </p>
        </div>
      </div>
      {plan && (
        <>
          <div>
            <div
              style={{
                backgroundColor: plan.styles_tables.bg,
                color: plan.styles_tables.color,
              }}
              className={styles.title_table}
            >
              <h1>Coberturas {plan.name}</h1>
            </div>
            {plan.coberturas.length > 0 ? (
              <TableCobertura plan={plan} infTables={infTables} />
            ) : (
              <div style={{ display: "flex", justifyContent: "left" }}>
                <div
                  style={{
                    width: "93%",
                    borderTop: "1px #C0BFC0 solid",
                    marginLeft: "31px",
                  }}
                />
              </div>
            )}
          </div>
          <div style={{ paddingBottom: "25px" }}>
            <div
              style={{
                marginTop: plan.coberturas.length > 0 ? "100px" : "40px",
                backgroundColor: plan.styles_tables.bg,
                color: plan.styles_tables.color,
              }}
              className={styles.title_table}
            >
              <h1>Asistencias {plan.name}</h1>
            </div>
            {plan.asistencias.length > 0 ? (
              <TableAsistencia plan={plan} infTables={infTables} />
            ) : (
              <br />
            )}
          </div>
        </>
      )}
    </div>
  );
}

import styles from "./styles.module.css";
import warning from "../../../assets/svg/error.svg";

export const Intermediary = ({actionSi, actionNo}) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#1E1045",
          opacity: 0.9,
        }}
      />
      <PoputReload
        buttons={[
          {
            action: () => actionSi(),
            text: "Sí, regresar",
            style: "button1",
          },
          {
            action: () => actionNo(),
            text: "No, continuar",
            style: "button",
          },
        ]}
        stylesParrafo1={{
          height: "90px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
        title={"Apreciado intermediario,"}
        num_cotizacion={false}
        parrafo1={
          <>
            <p>Ten en cuenta que una vez regreses a pasos anteriores de</p>
            <p>la cotización desde este punto, es posible que se generen</p>
            <p>variaciones en la tarifa entregada inicialmente</p>
          </>
        }
      />
    </div>
  );
};


export default function PoputReload({
  buttons = [],
  num_cotizacion = true,
  stylesParrafo1 = null,
  btnReintentar = false,
  title = "¡Ups! Lo sentimos",
  parrafo1 = "", // Controla qué texto principal se muestra
  parrafo2 = "", // Controla el tipo de mensaje adicional
}) {
  return (
    <div>
      <div className={styles.div_root}>
        <img src={warning} />
        <div className={styles.div_text}>
          <p className={styles.title}>{title}</p>
          {/* Mensajes principales controlados por mostrarParrafos */}
          <p
            style={stylesParrafo1 ? stylesParrafo1 : { height: "45px" }}
            className={styles.text1}
          >
            {parrafo1}
          </p>
          <p className={styles.text1}>{parrafo2}</p>
        </div>
        <div>
          {num_cotizacion && (
            <p className={styles.text_num_quotation}>
              Número de cotización <span>100030819</span>
            </p>
          )}
          {/* Botones controlados por continuarCotizacion */}
          <div
            className={`${styles.div_btn} ${
              !btnReintentar ? styles.singleButton : ""
            }`}
          >
            {buttons.map((buton, i) => (
              <button
                key={i}
                onClick={() => buton.action()}
                className={styles[buton.style]}
              >
                {buton.text}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={styles.footerContainer}>
            <div className={styles.footerTextt}>
              <p>
                Para obtener información adicional comunícate con la mesa de
                ayuda al correo
              </p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="mailto:Soporte.aplicativos@libertycolombia.com"
                className={styles.footerLink}
              >
                Soporte.aplicativos@libertycolombia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

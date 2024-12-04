import styles from "./styles.module.css";

export default function InputForm({ label = "Primer nombre" }) {
  return (
    <label className={styles.label}>
      <p className={styles.p_text}>
        {label} <span style={{ color: "#28A3AF" }}>*</span>
      </p>
      <input className={styles.input} type="text" />
    </label>
  );
}

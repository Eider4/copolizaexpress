import { useState } from "react";
import styles from "./styles.module.css";

const input = ({ value, onChange, placehorder, ...props }) => {
     
      const [inputActive, setInputActive] = useState(false);
      return (
        <label
          style={{
            "--top-placeholder": inputActive ? "-20px" : "0",
          }}
          onClick={() => setInputActive(true)}
          className={styles.container_input}
        >
          <input className={styles.input2} {...props} type="text" />
          <p className={styles.placehorder}>{placehorder}</p>
        </label>
      );
}

export default input
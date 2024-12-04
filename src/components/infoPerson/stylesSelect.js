
// stilos
export const customStyles = {
  control: (base) => ({
    ...base,
    background: "#e6e6e6",
    border: "1px solid #d9d9d9",
    borderRadius: "5px",
    border: "1px solid #919191",
    padding: "5px",
    fontSize: "14px",
    color: "#e6e6e6",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#333333", // Cambiado a gris
    },
    width: "116px",
    height: "50px",
  }),
  
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#333333", // Cambiado a gris
  }),
  placeholder: (base) => ({
    ...base,
    color: "#b3b3b3",
  }),
};

export const customStylesError = {
  control: (base) => ({
    ...base,
    background: "#FAF1F1 ",
    border: "1px solid #E92243",
    borderRadius: "8px",
    padding: "5px",
    fontSize: "14px",
    color: "#000",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#ff0000",
    },
    width: "116px",
    height: "50px",
  }),
  
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#666666",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#000",
  }),
};

export const citisStyles = {
  control: (base) => ({
    ...base,
    background: "#ffffff",
    border: "1px solid #919191",
    borderRadius: "8px",
    padding: "5px",
    fontSize: "14px",
    color: "#333333",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#333333", // Cambiado a gris
    },
    width: "375px",
    height: "63px",
  }),
  
  placeholder: (base) => ({
    ...base,
    color: "#b3b3b3",
    textAlign: "left", // Alinear el texto a la izquierda
    marginLeft: "-10px", // Ajustar el espacio desde el borde izquierdo
  }),
  
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#333333", // Cambiado a gris
  }),
};

export const citisStylesError = {
  control: (base) => ({
    ...base,
    background: "#FAF1F1 ",
    border: "1px solid #E92243",
    borderRadius: "8px",
    padding: "5px",
    fontSize: "14px",
    color: "#000",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#ff0000",
    },
    width: "375px",
    height: "63px",
  }),
  
  menu: (base) => ({
    ...base,
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f8ff" : "#ffffff",
    color: state.isFocused ? "#0073e6" : "#333333",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#0073e6",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#000",
  }),
};
export const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
  label: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
}));

export const monthOptions = [
  { value: "01", label: "Enero" },
  { value: "02", label: "Febrero" },
  { value: "03", label: "Marzo" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Mayo" },
  { value: "06", label: "Junio" },
  { value: "07", label: "Julio" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

export const yearOptions = Array.from({ length: 100 }, (_, i) => ({
  value: `${new Date().getFullYear() - i}`,
  label: `${new Date().getFullYear() - i}`,
}));

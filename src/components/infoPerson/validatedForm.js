export const validateForm = ({
  primerNombre,
  primerApellido,
  genero,
  date,
  añosExperiencia,
  ciuadadesMovilizacion,
  identificacionConyuge,
}) => {
  let error = [];
  if (!primerNombre?.trim()) error.push("primerNombre");
  if (!primerApellido?.trim()) error.push("primerApellido");
  if (!genero) error.push("genero");
  if (date) {
    if (!date.dia) error.push("dia");
    if (!date.mes) error.push("mes");
    if (!date.año) error.push("año");
  }
  if (!añosExperiencia?.trim()) error.push("añosExperiencia");
  if (!ciuadadesMovilizacion) error.push("ciuadadesMovilizacion");
  if (!identificacionConyuge) error.push("identificacionConyuge");

  return error;
};

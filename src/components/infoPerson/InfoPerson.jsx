import React, { useEffect, useState } from "react";
import style from "./InfoPerson.module.css";
import InputForm from "../atoms/InputForm.jsx";
import Select from "react-select";
import Navbar from "../organisms/navbar-2/Navbar.jsx";
import FooterButtons from "../molecules/Footer/FooterButtons.jsx";
import CardDiscount from "../molecules/card-discount/CardDiscount.jsx";
import citys from "../atoms/input/citys.js";
import SessionTimeout from "../molecules/Modal/SessionTimeout/SessionTimeout.jsx";


import {
  citisStyles,
  citisStylesError,
  customStyles,
  customStylesError,
} from "./stylesSelect.js";
import warningIcons from "../../assets/svg/icon_Error.svg";
import { dayOptions, monthOptions, yearOptions } from "./dateInf.js";
import { validateForm } from "./validatedForm.js";
import { AdditionalDiscount } from "../molecules/additional-discount/AdditionalDiscount.jsx";
import { useNavigate } from "react-router-dom";
import { Footer } from "../molecules/Footer/Footer.jsx";
import Spiner from "../molecules/Spiner/Spiner.jsx";
import WaitingTime from "../waitingTime/waitingTime.jsx";

export const InfoPerson = () => {
  const [error, setError] = useState({
    primerNombre: "",
    primerApellido: "",
    genero: "",
    dia: "",
    mes: "",
    año: "",
    añosExperiencia: "",
    ciuadadesMovilizacion: "",
    identificacionConyuge: "",
  });
  const [formData, setFormData] = useState({
    primerNombre: "",
    primerApellido: "",
    genero: "",
    date: {},
    añosExperiencia: "",
    ciuadadesMovilizacion: "",
    identificacionConyuge: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [conyuge, setConyuge] = useState(false);

  const handleDayChange = (selectedDay) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, dia: selectedDay.value },
    }));
    setError((prev) => ({ ...prev, dia: "" }));
  };
  const handleMonthChange = (selectedMonth) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, mes: selectedMonth.value },
    }));
    setError((prev) => ({ ...prev, mes: "" }));
  };
  const handleYearChange = (selectedYear) => {
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, año: selectedYear.value },
    }));
    setError((prev) => ({ ...prev, año: "" }));
  };
  const handleCitys = (selectedcity) => {
    setFormData((prev) => ({
      ...prev,
      ciuadadesMovilizacion: selectedcity.value,
    }));
    setError((prev) => ({ ...prev, ciuadadesMovilizacion: "" }));
  };
  const handleSubmit = () => {
    const returnError = validateForm(formData);
    let arraySinConyuge = returnError;
    if (!conyuge) {
      arraySinConyuge = returnError.filter(
        (item) => item != "identificacionConyuge"
      );
    }
    if (arraySinConyuge.length > 0) {
      arraySinConyuge.map((item) =>
        setError((prev) => ({ ...prev, [item]: "campo obligatorio" }))
      );
      const element = document.getElementById("form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setLoading(true);
    setTimeout(() => {
      navigate("/price");
    }, 3000);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Footer soloModal={true} />
      {loading && <Spiner />}
      <Navbar />
      <WaitingTime />
      <div className={style.InfoPerson}>
        <h1 className={style.persona}>Persona</h1>
        <p className={style.information}>
          Ingresa la información de la persona, conocerla es importante para
          hacer una propuesta
        </p>
        <p className={style.information2}>acorde a sus necesidades</p>
        <p className={style.parragraf}>Los campos con (*) son obligatorios</p>

        <div id="form" className={style.containerCard}>
          <div>
            <table>
              <tr>
                <td>
                  <div className={style.line} />
                </td>
                <td>
                  <img className={style.Image} src="Grupo7616.svg" alt="" />
                </td>
                <tr>
                  <td className={style.documents}>Tipo de documento</td>
                </tr>
                <tr>
                  <td>Cédula de Ciudadanía</td>
                </tr>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <td>
                  <div className={style.line} />
                </td>
                <td>
                  <img className={style.Image} src="Grupo2046.svg" alt="" />
                </td>
                <tr>
                  <td className={style.documents}>Identificación</td>
                </tr>
                <tr>
                  <td className={style.numberCc}>123456789</td>
                </tr>
              </tr>
            </table>
          </div>
        </div>

        <div className={style.containerOne}>
          <div style={{ position: "relative" }}>
            {/* primerNombre */}
            {error && error.primerNombre && (
              <div className={style.div_icon_error}>
                <img
                  className={style.icon_error}
                  src={warningIcons}
                  alt="icon_Error.svg"
                />
                <p className={style.error_form}>{error.primerNombre}</p>
              </div>
            )}
            <InputForm
              name="primerNombre"
              action={handleInput}
              style={
                error.primerNombre
                  ? { border: "#D32F2F solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {error && error.primerApellido && (
              <div className={style.div_icon_error}>
                <img
                  className={style.icon_error}
                  src={warningIcons}
                  alt="icon_Error.svg"
                />{" "}
                <p className={style.error_form}>{error.primerApellido}</p>
              </div>
            )}
            {/* primerApellido */}
            {/* <Input placehorder="primer nombre"/> */}
            <InputForm
              name="primerApellido"
              action={handleInput}
              label="Primer apellido"
              style={
                error.primerApellido
                  ? { border: "#D32F2F solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
        </div>

        <div className={style.containerTwo}>
          {/* Género */}
          <div
            style={{
              position: "relative",
            }}
            className={style.container_gender}
          >
            {error.genero && (
              <div className={style.error_genero1}>
                <img
                  className={style.icon_error}
                  src={warningIcons}
                  alt="icon_Error.svg"
                />
                <p>El genero es requerido</p>
              </div>
            )}
            <form
              style={{ margin: "20px", marginLeft: "100px", marginRight: "0" }}
            >
              <div
                style={
                  error.genero
                    ? {
                        border: "#E92243 solid 2px",
                        backgroundColor: "#FAF1F1 ",
                      }
                    : {}
                }
                className={style.gender}
              >
                <p className={style.gender_p}>
                  Género<span style={{ color: "#28A3AF" }}>*</span>
                </p>
                <label style={{ position: "relative" }}>
                  {/* genero */}
                  <input
                    type="radio"
                    name="genero"
                    value={formData.genero === "masculino"}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, genero: "masculino" }));
                      setError((prev) => ({ ...prev, genero: "" }));
                    }}
                    style={{ width: "60px", height: "15px" }}
                  />
                  Masculino
                </label>
              </div>
              <div
                style={
                  error.genero
                    ? {
                        border: "#E92243 solid 2px",
                        backgroundColor: "#FAF1F1 ",
                        // marginTop: "20px",
                      }
                    : {
                        // marginTop: "20px",
                      }
                }
                className={style.gender}
              >
                <label style={{ position: "relative" }}>
                  {/* genero */}
                  <input
                    type="radio"
                    name="genero"
                    value={formData.genero === "femenino"}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, genero: "femenino" }));
                      setError((prev) => ({ ...prev, genero: "" }));
                    }}
                    style={{ width: "60px", height: "15px" }}
                  />
                  Femenino
                </label>
              </div>
            </form>
          </div>

          {/* Fecha de nacimiento */}
          <div
            style={{
              position: "relative",
              margin: " 20px 90px 20px 0",
            }}
            className={style.info_date}
          >
            {error.dia && (
              <div className={style.error_dia}>
                <img
                  className={style.icon_error}
                  src={warningIcons}
                  alt="icon_Error.svg"
                />
                <p style={{ fontSize: "12px" }}>
                  No cumple con la politica de edad minima/maxima del conductor
                </p>
              </div>
            )}
            <p className={style.gender_birth}>
              Fecha de nacimiento
              <span style={{ color: "#28A3AF" }}>*</span>
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ position: "relative" }}>
                {/* dia */}
                <Select
                  options={dayOptions}
                  styles={!error.dia ? customStyles : customStylesError}
                  placeholder="Día"
                  onChange={handleDayChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
              <div style={{ position: "relative" }}>
                {/* {error && <p className={style.error_form}>{error.mes}</p>} */}
                {/* mes */}
                <Select
                  options={monthOptions}
                  styles={!error.mes ? customStyles : customStylesError}
                  placeholder="Mes"
                  onChange={handleMonthChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
              <div style={{ position: "relative" }}>
                {/* {error && <p className={style.error_form}>{error.año}</p>} */}
                {/* año */}
                <Select
                  options={yearOptions}
                  styles={!error.año ? customStyles : customStylesError}
                  placeholder="Año"
                  onChange={handleYearChange}
                  isSearchable={false}
                  menuPlacement="top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.containerOne}>
          <div style={{ position: "relative" }}>
            {/* {error && (
              <p className={style.error_form}>{error.añosExperiencia}</p>
            )} */}
            <InputForm
              action={handleInput}
              name="añosExperiencia"
              type="number"
              label="Años de experiencia"
              style={
                error.añosExperiencia
                  ? { border: "#E92243 solid 2px", backgroundColor: "#FAF1F1 " }
                  : {}
              }
            />
          </div>
          <div style={{ position: "relative",}}>
          {error.ciuadadesMovilizacion && (
              <div className={style.error_dia}>
                <img
                  className={style.icon_error}
                  src={warningIcons}
                  alt="icon_Error.svg"
                />
                <p style={{ fontSize: "12px" }}>
                  Debes realizar una busqueda
                </p>
              </div>
            )}
            <Select
              className={style.inputCity}
              options={citys}
              styles={
                !error.ciuadadesMovilizacion ? citisStyles : citisStylesError
              }
              placeholder="Ciudades de movilizacion"
              onChange={handleCitys}
              isSearchable={true} // Permitir búsqueda y escritura
              menuPlacement="top"
              menuPortalTarget={document.body} // Esto dibuja el menú en el body
            />
          </div>
        </div>
      </div>
      <CardDiscount />
      <AdditionalDiscount
        errorIdentificion={error}
        handleInput={handleInput}
        conyuge={conyuge}
        setConyuge={setConyuge}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4em",
          marginBottom: "7em",
        }}
      >
        <FooterButtons type={3} functionContinuar={handleSubmit} />
      </div>
    </>
  );
};

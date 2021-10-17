import React from "react";
import "../assets/styles/components/Loader.scss";
import loading from "../assets/static/images/teemo.gif";

const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={loading} alt="Portal loader" />
    <span className="loader-text">Cargando...</span>
  </div>
);

export default Loader;

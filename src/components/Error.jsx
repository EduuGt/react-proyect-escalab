import React from "react";
import "../assets/styles/components/Error.scss";
import errorImage from "../assets/static/images/amumu.png";

const Error = () => (
  <div className="error">
    <img className="error-img" src={errorImage} alt="Amumu Crying" />
    <span className="error-text">Sorry, an error has ocurred.</span>
  </div>
);

export default Error;

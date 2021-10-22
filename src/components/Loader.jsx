import React from "react";
import "../assets/styles/components/Loader.scss";
import loading from "../assets/static/images/mf.gif";

const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={loading} alt="Miss Fortune loader" />
    <span className="loader-text">Loading...</span>
  </div>
);

export default Loader;

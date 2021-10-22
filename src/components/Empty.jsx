import React from "react";
import "../assets/styles/components/Empty.scss";
import emptyImage from "../assets/static/images/amumu.png";

const Empty = () => (
  <div className="empty">
    <img className="empty-img" src={emptyImage} alt="Rick" />
    <span className="empty-text">
      You haven&apos;t favorites.
      <br />
      Go and select you favorite characters.
    </span>
  </div>
);

export default Empty;

import React from "react";
import { Link } from "react-router-dom";

import "./HomeButton.scss";

const HomeButton = () => (
  <Link to={"/"} className="homeButton__link">
    До покупок
  </Link>
);

export default HomeButton;

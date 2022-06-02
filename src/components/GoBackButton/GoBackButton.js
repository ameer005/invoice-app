import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./GoBackButton.module.scss";

import arrowLeft from "../../assets/icons/icon-arrow-left.svg";

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={styles.btn_back}>
      <img className={styles.arrowLeft} src={arrowLeft} alt="arrow left" />
      <span>Go Back</span>
    </button>
  );
};

export default GoBackButton;

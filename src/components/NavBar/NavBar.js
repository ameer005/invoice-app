import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/img/image-avatar.jpg";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_box}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>

      <button className={styles.theme_switcher}></button>

      <div className={styles.avatar_box}>
        <img className={styles.avatar} src={avatar} alt="user img" />
      </div>
    </nav>
  );
};

export default NavBar;

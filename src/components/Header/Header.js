import React, { Component } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

class Header extends Component {
  render() {
    return (
      <header className={styles.header__wrapper}>
        <NavLink to="/" className={styles.header__wrapper__customText}>
          lowekstudio
        </NavLink>
        <HeaderNavigation />
      </header>
    );
  }
}

export default Header;

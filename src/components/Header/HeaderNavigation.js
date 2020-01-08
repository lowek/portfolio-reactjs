import React from "react";
import styles from "./HeaderNavigation.module.scss";
import menuHam from "../../assets/menuHam.svg";
import closeMenu from "../../assets/close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";

class HeaderNavigation extends React.Component {
  constructor() {
    super();
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({ toggle: !this.state.toggle }));
  };

  render() {
    const toggle = this.state.toggle;
    return (
      <>
        <nav
          className={
            toggle
              ? `${styles.navMain} ${styles.slideBottom}`
              : `${styles.navMain}`
          }
        >
          <ul className={styles.navWrapper}>
            <li className={styles.navItem}>
              <AnchorLink
                className={`${styles.navItemLink} menu-link`}
                onClick={this.handleClick}
                href="#portfolio"
              >
                Case study
              </AnchorLink>
            </li>
            <li className={styles.navItem}>
              <AnchorLink
                className={`${styles.navItemLink} menu-link`}
                onClick={this.handleClick}
                href="#services"
              >
                Our experience
              </AnchorLink>
            </li>
            <li className={styles.navItem}>
              <AnchorLink
                className={`${styles.navItemLink} menu-link`}
                onClick={this.handleClick}
                href="#contact"
              >
                Say hello
              </AnchorLink>
            </li>
          </ul>
          <ul className={styles.navSocial}>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navSocialItemLink}
                to="https://www.behance.net/krystian-rygiel"
              >
                Behance
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navSocialItemLink}
                to="https://www.dribbble.com/lowek"
              >
                Dribble
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navSocialItemLink}
                to="https://www.linkedin.com/pub/krystian-rygiel/9a/733/4aa"
              >
                Linkedin
              </NavLink>
            </li>
          </ul>
        </nav>

        <button onClick={this.handleClick} className={styles.navHamburger}>
          {toggle ? (
            <img src={closeMenu} alt="close button" />
          ) : (
            <img src={menuHam} alt="hamburger" />
          )}
        </button>
      </>
    );
  }
}

export default HeaderNavigation;

import React, { Component } from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.footer}>
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__row}>
              <ul className={styles.footer__wrapper__menu}>
                <li>
                  <NavLink to="https://www.behance.net/krystian-rygiel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#d42869"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z" />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://dribbble.com/lowek">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#d42869"
                    >
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.linkedin.com/in/krystianrygiel/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#d42869"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#d42869"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <span className={styles.footer__wrapper__copyright}>
                    Copyright &copy; 2019. All rights reserved.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

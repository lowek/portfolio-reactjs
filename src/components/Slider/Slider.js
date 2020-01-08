import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => (
  <div className={styles.slider__wrapper}>
    <h1 className={`${styles.slider__wrapper__h1} slider__text`}>
      I'm a different
      <br />
      kind of <span>studio</span>.
    </h1>
  </div>
);

export default Slider;

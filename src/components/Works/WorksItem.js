import React from "react";
import styles from "./Works.module.scss";

const WorksItem = ({ url, name, img, description, technology }) => (
  <>
    <div
      className={`${styles.works__wrapper__content} work__project`}
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <h1
        className={styles.works__wrapper__content__headline}
        data-aos="fade-down"
      >
        {name}
      </h1>
      <a
        href={url}
        className={styles.works__wrapper__content__casestudy}
        data-aos="fade-down"
      >
        Zobacz online
      </a>
    </div>
  </>
);

export default WorksItem;

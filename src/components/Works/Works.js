import React from "react";
import WorksList from "./WorksList";
import styles from "./Works.module.scss";

const work = [
  {
    name: "S'SENSE brand studio",
    url: "http://google.pl/",
    img: "https://lowek.pl/portfolio/sense.jpg",
    technology: "HTML5/CSS3, Wordpress",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
  },
  {
    name: "Esports Skills Camp",
    url: "http://esports-camp.pl/",
    img: "https://lowek.pl/portfolio/esc.jpg",
    technology: "Branding, React.js"
  },
  // {
  //   name: "Ula Grzanka",
  //   url: "http://ulagrzanka.pl/",
  //   img: "https://lowek.pl/portfolio/grzanka.jpg",
  //   technology: "Branding, HTML5/CSS3, Wordpress"
  // },
  {
    name: "Błazkowscy",
    url: "http://studio-blazkowska.pl/",
    img: "https://lowek.pl/portfolio/blazkowscy.jpg",
    technology: "Branding, HTML5/CSS3, Wordpress"
  }
];

class Works extends React.Component {
  render() {
    return (
      <div id="portfolio" className={`${styles.works__wrapper}`}>
        <WorksList work={work} />
      </div>
    );
  }
}

export default Works;

import React from "react";
import styles from "./Services.module.scss";

class Services extends React.Component {
  render() {
    return (
      <>
        <section id="services" className={styles.services}>
          <div className={styles.services__wrapper}>
            <div
              className={styles.services__wrapper__content}
              data-aos="fade-up"
            >
              <h1>
                Our
                <br />
                Experience
              </h1>
              <p>
                Ogólnie znana teza głosi, iż użytkownika może rozpraszać
                zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej
                wygląd.Jedną z mocnych stron używania Lorem Ipsum jest to, że ma
                wiele różnych„ kombinacji” zdań, słów i akapitów, w
                przeciwieństwie do zwykłego: „tekst, tekst, tekst”,
                sprawiającego, że wygląda to„ zbyt czytelnie” po polsku.Wielu
                webmasterów i designerów używa Lorem Ipsum jako domyślnego
                modelu tekstu i wpisanie w internetowej wyszukiwarce‘ lorem
                ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są
                w budowie.Wiele wersji tekstu ewoluowało i zmieniało się przez
                lata, czasem przez przypadek, czasem specjalnie(humorystyczne
                wstawki itd).
              </p>
            </div>
            <div className={styles.services__wrapper__colorLine} />
            <div className={styles.services__wrapper__content}>
              <div className={styles.services__wrapper__row}>
                <div className={styles.services__wrapper__row__col}>
                  <div
                    className={styles.services__wrapper__row__col__dots}
                    data-aos="fade-left"
                  />
                  <div>
                    Brand
                    <span>
                      <br /> Analiza rynku i konkurencji
                      <br />
                      Kreowanie nazwy marki
                    </span>
                  </div>
                </div>
                <div className={styles.services__wrapper__row__col}>
                  <div
                    className={styles.services__wrapper__row__col__dots__second}
                    data-aos="fade-left"
                  />
                  <div>
                    Design
                    <span>
                      Projektowanie logo Identyfikacja wizualna
                      <br />
                      DTP
                      <br />
                      Webdesign
                    </span>
                  </div>
                </div>
                <div className={styles.services__wrapper__row__col}>
                  <div
                    className={styles.services__wrapper__row__col__dots__third}
                    data-aos="fade-left"
                  />
                  <div>
                    Development
                    <span>
                      Serwisy internetowe
                      <br />
                      E-commerce
                      <br />
                      Web aplikacje
                      <br />
                      Aplikacje mobilne
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;

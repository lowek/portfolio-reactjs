import React from "react";
import styles from "./Clients.module.scss";
import blazkowski from "../../assets/clients/blazkowski.png";
import blazkowscy from "../../assets/clients/blazkowscy.png";
import kinguin from "../../assets/clients/kinguin.png";
import sense from "../../assets/clients/sense.svg";
import estetic from "../../assets/clients/estetic.png";

class Clients extends React.Component {
  render() {
    return (
      <div
        id="clients"
        className={styles.clients__wrapper}
        data-aos="fade-down"
      >
        <div className={styles.clients__wrapper__row}>
          <a
            href="https://kinguin.net"
            className={styles.clients__wrapper__row__col}
          >
            <img src={kinguin} alt="kinguin" />
          </a>
          <a
            href="http://barberroomblazkowski"
            className={styles.clients__wrapper__row__col}
          >
            <img src={blazkowski} alt="blazkowski" />
          </a>
          <a
            href="https://studio-blazkowska.pl/"
            className={styles.clients__wrapper__row__col}
          >
            <img src={blazkowscy} alt="blazkowscy" />
          </a>
          <a
            href="https://s-sense.pl"
            className={styles.clients__wrapper__row__col}
          >
            <img src={sense} alt="s-sense brand studio" />
          </a>
          <a
            href="https://esteticrzeszow.pl"
            className={styles.clients__wrapper__row__col}
          >
            <img src={estetic} alt="estetic rzeszów" />
          </a>
        </div>
      </div>
    );
  }
}

export default Clients;

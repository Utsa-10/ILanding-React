import React from "react";
import ServicesCard from "./ServicesCard";
import styles from "./services.module.css";
import {
  faWaveSquare,
  faChartDiagram,
  faDisease,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";

function ServicesRow() {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2>Services</h2>
        <hr />
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* Cards  */}
      <div className={styles.cardsOuterContainer}>
        <ServicesCard
          icon={faWaveSquare}
          name="Nesciunt Mete"
          designation="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
          read="Read"
        />
        <ServicesCard
          icon={faChartDiagram}
          name="Eosle Commodi"
          designation="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
          read="Read"
        />
        <ServicesCard
          icon={faDisease}
          name="Ledo Markt"
          designation="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
          read="Read"
        />
        <ServicesCard
          icon={faClipboardList}
          name="Asperiores Commodit"
          designation="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
          read="Read"
        />
      </div>
    </div>
  );
}

export default ServicesRow;

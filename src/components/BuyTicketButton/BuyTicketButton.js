import React from "react";
import { isMobile } from "react-device-detect";

import styles from "./BuyTicketButton.css";

const BuyTicketButton = ({ ...props }) => {
  return (
    <div className={styles.BuyTicketButtonWrapper}>
      <a
        className={styles.BuyTicketButton}
        href="https://tikkio.com/tickets/34261-mandaljazz-2023"
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {isMobile ? (
          <div>Billetter</div>
        ) : (
          <div>
            Kjøp
            <br />
            billetter
          </div>
        )}
      </a>
    </div>
  );
};

export default BuyTicketButton;

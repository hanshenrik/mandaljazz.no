import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "../../components";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
            style={{ borderBottom: "none" }}
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="#297a4d" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
            style={{ borderBottom: "none" }}
          >
            <FontAwesomeIcon icon={faInstagram} color="#36a065" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
            style={{ borderBottom: "none" }}
          >
            <FontAwesomeIcon icon={faTwitter} color="#47c17e" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
            style={{ borderBottom: "none" }}
          >
            <FontAwesomeIcon icon={faYoutube} color="#6dce98" />
          </Link>
        </li>
      </ul>
      <div>
        <Link href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
          post@mandaljazz.no
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

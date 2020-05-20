import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

import kulturraadetImg from "../../assets/images/sponsors/kulturraadet.png";
import mandalKommuneImg from "../../assets/images/sponsors/mandal-kommune.png";
import nordiskKulturfondImg from "../../assets/images/sponsors/nordisk-kulturfond.jpg";
import sorNorskJazzsenterImg from "../../assets/images/sponsors/sor-norsk-jazzsenter.png";
import vestAgderFylkeskommuneImg from "../../assets/images/sponsors/vest-agder-fylkeskommune.png";
import keychangeImg from "../../assets/images/sponsors/keychange.png";
import sparebankenSorImg from "../../assets/images/sponsors/sparebanken-sor.png";
import frifondImg from "../../assets/images/sponsors/frifond.png";
import hrRedaktorImg from "../../assets/images/sponsors/hr-redaktor.jpg";
import larsenOptikkImg from "../../assets/images/sponsors/larsen-optikk.png";
import sjosandenGrafiskeImg from "../../assets/images/sponsors/sjosanden-grafiske.png";
import jazzlaugsVennerImg from "../../assets/images/sponsors/jazzlaugs-venner.png";
import hansaBorgImg from "../../assets/images/sponsors/hansa-borg.png";
import nostedImg from "../../assets/images/sponsors/nosted.png";
import kjobmandsgaardenImg from "../../assets/images/sponsors/kjobmandsgaarden.png";
import mandalHotelImg from "../../assets/images/sponsors/mandal-hotel.png";
import kjellbyFiskImg from "../../assets/images/sponsors/kjellby-fisk.png";
import norskJazzforumImg from "../../assets/images/sponsors/norsk-jazzforum.svg";
import { Link } from "../../components";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Hovedsponsor</h2>
      <div className={classNames(styles.Sponsors, "large")}>
        <Link href="https://www.sor.no/" title="Sparebanken Sør">
          <img src={sparebankenSorImg} alt="Sparebanken Sør" />
        </Link>
      </div>
      <h2>Sponsorer</h2>
      <div className={styles.Sponsors}>
        <Link href="https://red.no/" title="Hr. Redaktør!">
          <img src={hrRedaktorImg} alt="Hr. Redaktør!" />
        </Link>
        <Link href="https://www.larsenoptikk.no/" title="Larsen Optikk">
          <img
            src={larsenOptikkImg}
            alt="Larsen Optikk"
            style={{ maxWidth: "9rem" }}
          />
        </Link>
        <Link href="https://www.sjograf.no/" title="Sjøsanden Grafiske">
          <img
            src={sjosandenGrafiskeImg}
            alt="Sjøsanden Grafiske"
            style={{ maxWidth: "9rem" }}
          />
        </Link>
        <NavLink to="/jazzlaugs-venner" title="Jazzlaugs venner">
          <img src={jazzlaugsVennerImg} alt="Jazzlaugs venner" />
        </NavLink>
      </div>
      <h2>Støttespillere</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <Link href="https://www.hansaborg.no/" title="Hansa Borg Bryggerier">
          <img src={hansaBorgImg} alt="Hansa Borg Bryggerier" />
        </Link>
        <Link href="https://www.nosted.com/" title="Nøsted">
          <img src={nostedImg} alt="Nøsted" />
        </Link>
        <Link href="https://www.kjobmandsgaarden.no/" title="Kjøbmandsgaarden">
          <img src={kjobmandsgaardenImg} alt="Kjøbmandsgaarden" />
        </Link>
        <Link href="https://mandalhotel.no/" title="Mandal Hotel">
          <img
            src={mandalHotelImg}
            alt="Mandal Hotel"
            style={{ maxWidth: "8rem" }}
          />
        </Link>
        <img src={kjellbyFiskImg} alt="Kjellby Fisk" />
      </div>
      <h2>Offentlig støtte</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <Link href="https://www.vaf.no/" title="Vest-Agder Fylkeskommune">
          <img src={vestAgderFylkeskommuneImg} alt="Vest-Agder Fylkeskommune" />
        </Link>
        <Link
          href="https://www.nordiskkulturfond.org/en"
          title="Nordisk kulturfond"
        >
          <img src={nordiskKulturfondImg} alt="Nordisk kulturfond" />
        </Link>
        <Link href="https://www.mandal.kommune.no/" title="Mandal kommune">
          <img src={mandalKommuneImg} alt="Mandal kommune" />
        </Link>
        <Link
          href="https://sornorsk.jazzinorge.no/"
          title="Sør-Norsk Jazzsenter"
        >
          <img src={sorNorskJazzsenterImg} alt="Sør-Norsk Jazzsenter" />
        </Link>
        <Link href="https://jazzforum.jazzinorge.no/" title="Norsk Jazzforum">
          <img src={norskJazzforumImg} alt="Norsk Jazzforum" />
        </Link>
        <Link href="https://www.kulturradet.no/" title="Kulturrådet">
          <img src={kulturraadetImg} alt="Kulturrådet" />
        </Link>
        <Link href="https://www.frifond.no/" title="Frifond">
          <img src={frifondImg} alt="Frifond" />
        </Link>
        <Link href="https://keychange.eu/" title="Keychange">
          <img src={keychangeImg} alt="Keychange" />
        </Link>
        <span style={{ fontSize: "1.25rem" }}>Ordførerpotten</span>
      </div>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="#6adfc7" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} color="#18e2ba" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} color="#34ac94" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} color="#B0F4E6" />
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

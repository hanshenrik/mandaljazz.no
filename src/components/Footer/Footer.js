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

import { Link } from "../../components";
import styles from "./Footer.css";

// Sponsor images
import kulturraadetImg from "../../assets/images/sponsors/kulturraadet.png";
import lindesnesKommuneImg from "../../assets/images/sponsors/lindesnes-kommune.png";
import nordiskKulturfondImg from "../../assets/images/sponsors/nordisk-kulturfond.jpg";
import sorNorskJazzsenterImg from "../../assets/images/sponsors/sor-norsk-jazzsenter.png";
import agderFylkeskommuneImg from "../../assets/images/sponsors/agder-fylkeskommune.png";
import keychangeImg from "../../assets/images/sponsors/keychange.png";
import sparebankenSorImg from "../../assets/images/sponsors/sparebanken-sor.png";
import hrRedaktorImg from "../../assets/images/sponsors/hr-redaktor.jpg";
import sjosandenGrafiskeImg from "../../assets/images/sponsors/sjosanden-grafiske.png";
import jazzlaugsVennerImg from "../../assets/images/sponsors/jazzlaugs-venner.png";
// import hansaBorgImg from "../../assets/images/sponsors/hansa-borg.png";
import nostedImg from "../../assets/images/sponsors/nosted.png";
import kjobmandsgaardenImg from "../../assets/images/sponsors/kjobmandsgaarden.png";
// import norskJazzforumImg from "../../assets/images/sponsors/norsk-jazzforum.svg";
// import pulsLogoImg from "../../assets/images/sponsors/nordisk-kulturfond-puls-logo-black.png";
import gullsmedDanielsenImg from "../../assets/images/sponsors/gullsmed-danielsen.png";
// import norEngrosImg from "../../assets/images/sponsors/norengros.svg";
// import kulturromImg from "../../assets/images/sponsors/kulturrom.png";
import larsenOptikkImg from "../../assets/images/sponsors/larsen-optikk.png";
import veidekkeImg from "../../assets/images/sponsors/veidekke.jpg";
import egelandRorImg from "../../assets/images/sponsors/egeland-ror.png";
// import mandalKjoleserviceImg from "../../assets/images/sponsors/mandal-kjoleservice.svg";
import jobzoneImg from "../../assets/images/sponsors/jobzone.gif";
import mandalsImg from "../../assets/images/sponsors/mandals.jpg";
// import altiImg from "../../assets/images/sponsors/alti.png";
import brekkeStrandImg from "../../assets/images/sponsors/brekke-strand.png";
import torFasselandImg from "../../assets/images/sponsors/tor-fasseland.png";
// import sport1Img from "../../assets/images/sponsors/sport1.jpg";
import tessImg from "../../assets/images/sponsors/tess.jpg";
import lindesnesAvisImg from "../../assets/images/sponsors/lindesnes-avis.png";
import sorlandetsElektroImg from "../../assets/images/sponsors/sorlandets-elektro.jpg";
import revisorsenteretMandalImg from "../../assets/images/sponsors/revisorsenteret-mandal.png";
import mandalHotelImg from "../../assets/images/sponsors/mandal-hotel.png";
import marnarBrukImg from "../../assets/images/sponsors/marnar-bruk.png";
import mandalMusikkforeningImg from "../../assets/images/sponsors/mandal-musikkforening.jpg";
import coradoImg from "../../assets/images/sponsors/corado.jpg";
import whyConnectImg from "../../assets/images/sponsors/whyconnect.png";
// import heimtunByggImg from "../../assets/images/sponsors/heimtun-bygg.jpg";
import enokTotal from "../../assets/images/sponsors/enok-total.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h1 style={{ color: "var(--primary)" }}>Hovedsponsor 2022</h1>
      <div className={classNames(styles.Sponsors, "large")}>
        <Link href="https://www.sor.no/" title="Sparebanken Sør">
          <img src={sparebankenSorImg} alt="Sparebanken Sør" />
        </Link>
      </div>
      <hr style={{ transform: "rotate(1.5deg)" }} />
      <h2 style={{ color: "var(--primary)" }}>Sponsorer 2022</h2>
      <div className={styles.Sponsors}>
        <Link href="https://larsenoptikk.no/" title="Larsen Optikk">
          <img src={larsenOptikkImg} alt="Larsen Optikk" />
        </Link>
        <Link href="https://red.no/" title="Hr. Redaktør!">
          <img src={hrRedaktorImg} alt="Hr. Redaktør!" />
        </Link>
        <Link href="https://whyconnect.no/" title="WHY Connect">
          <img src={whyConnectImg} alt="WHY Connect" />
        </Link>
        {/* <Link href="https://www.heimtunbygg.no/" title="Heimtun Bygg">
          <img src={heimtunByggImg} alt="Heimtun Bygg" />
        </Link> */}
      </div>
      <hr style={{ transform: "rotate(-1.5deg)" }} />
      <h3 style={{ color: "var(--primary)" }}>Støttespillere 2022</h3>
      <div className={classNames(styles.Sponsors, "small")}>
        <NavLink to="/jazzlaugs-venner" title="Jazzlaugs venner">
          <img src={jazzlaugsVennerImg} alt="Jazzlaugs venner" />
        </NavLink>
        <Link href="https://tess.no/" title="Tess Teknisk Faghandel">
          <img src={tessImg} alt="Tess Teknisk Faghandel" />
        </Link>
        <Link href="https://www.l-a.no/" title="Lindesnes Avis">
          <img src={lindesnesAvisImg} alt="Lindesnes Avis" />
        </Link>
        <Link href="https://www.seeas.no/" title="Sørlandets Elektro">
          <img src={sorlandetsElektroImg} alt="Sørlandets Elektro" />
        </Link>
        <Link
          href="https://www.gullsmeddanielsen.no/"
          title="Gullsmed Danielsen"
        >
          <img src={gullsmedDanielsenImg} alt="Gullsmed Danielsen" />
        </Link>
        <Link
          href="https://revisorsenteretmandal.no/"
          title="Revisorsenteret Mandal"
        >
          <img src={revisorsenteretMandalImg} alt="Revisorsenteret Mandal" />
        </Link>
        <Link href="https://mandalhotel.no/" title="Mandal Hotel">
          <img src={mandalHotelImg} alt="Mandal Hotel" />
        </Link>
        <Link
          href="https://kjobmandsgaarden.no/"
          title="Kjøbmandsgaarden Hotel"
        >
          <img src={kjobmandsgaardenImg} alt="Kjøbmandsgaarden Hotel" />
        </Link>
        <Link href="https://www.tor-fasseland.no/" title="Tor Fasseland">
          <img src={torFasselandImg} alt="Tor Fasseland" />
        </Link>
        <Link href="https://mandals.com/" title="Mandals AS">
          <img src={mandalsImg} alt="Mandals AS" />
        </Link>
        <Link href="http://www.veidekke.no/" title="Veidekke">
          <img src={veidekkeImg} alt="Veidekke" />
        </Link>
        <Link
          href="https://brekkestrand.no/"
          title="Brekke &amp; Strand Akustikk"
        >
          <img src={brekkeStrandImg} alt="Brekke &amp; Strand Akustikk" />
        </Link>
        <Link href="https://www.nosted.com/" title="Nøsted">
          <img src={nostedImg} alt="Nøsted" />
        </Link>
        <Link href="https://www.egeland.no/" title="Egeland Rør">
          <img src={egelandRorImg} alt="Egeland Rør" />
        </Link>
        <Link href="https://marnarbruk.no/" title="Marnar Bruk">
          <img src={marnarBrukImg} alt="Marnar Bruk" />
        </Link>
        <Link href="https://www.sjograf.no/" title="Sjøsanden Grafiske">
          <img src={sjosandenGrafiskeImg} alt="Sjøsanden Grafiske" />
        </Link>
        <Link
          href="https://jobzone.no/avdelinger/mandal/"
          title="Jobzone Mandal"
        >
          <img src={jobzoneImg} alt="Jobzone Mandal" />
        </Link>
        <Link href="https://www.enoktotal.no/" title="Enøk Total">
          <img src={enokTotal} alt="Enøk Total" />
        </Link>
        <Link href="https://mmf.no/" title="Mandal Musikkforening">
          <img src={mandalMusikkforeningImg} alt="Mandal Musikkforening" />
        </Link>
        <Link
          href="https://coradocoffeeroasters.com/"
          title="Corado Coffee Roasters"
        >
          <img src={coradoImg} alt="Corado Coffee Roasters" />
        </Link>
        {/* <Link href="https://www.hansaborg.no/" title="Hansa Borg Bryggerier">
          <img src={hansaBorgImg} alt="Hansa Borg Bryggerier" />
        </Link> */}
        {/* <Link href="https://www.mandalks.no/" title="Mandal Kjøleservice">
          <img src={mandalKjoleserviceImg} alt="Mandal Kjøleservice" />
        </Link> */}
        {/* <Link href="https://alti.no/mandal/" title="Alti Mandal">
          <img src={altiImg} alt="Alti Mandal" />
        </Link> */}
        {/* <Link href="https://www.norengros.no/" title="NorEngros">
          <img
            src={norEngrosImg}
            alt="NorEngros"
            style={{ maxWidth: "8rem" }}
          />
        </Link> */}
        {/* <Link
          href="https://sport1.no/butikker/sport-1-mandal/"
          title="Sport1 Mandal"
        >
          <img src={sport1Img} alt="Sport1 Mandal" />
        </Link> */}
      </div>
      <hr style={{ transform: "rotate(1.5deg)" }} />
      <h2 style={{ color: "var(--primary)" }}>Offentlig støtte 2022</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <Link href="https://agderfk.no/" title="Agder Fylkeskommune">
          <img src={agderFylkeskommuneImg} alt="Agder Fylkeskommune" />
        </Link>
        <Link
          href="https://www.lindesnes.kommune.no/"
          title="Lindesnes kommune"
        >
          <img src={lindesnesKommuneImg} alt="Lindesnes kommune" />
        </Link>
        <Link
          href="https://sornorsk.jazzinorge.no/"
          title="Sør-Norsk Jazzsenter"
        >
          <img src={sorNorskJazzsenterImg} alt="Sør-Norsk Jazzsenter" />
        </Link>
        {/* <Link href="https://jazzforum.jazzinorge.no/" title="Norsk Jazzforum">
          <img src={norskJazzforumImg} alt="Norsk Jazzforum" />
        </Link> */}
        <Link
          href="https://www.nordiskkulturfond.org/en"
          title="Nordisk kulturfond"
        >
          <img src={nordiskKulturfondImg} alt="Nordisk kulturfond" />
        </Link>
        <Link href="https://www.kulturradet.no/" title="Kulturrådet">
          <img src={kulturraadetImg} alt="Kulturrådet" />
        </Link>
        {/* <Link href="https://puls.nordiskkulturfond.org/en/" title="Puls">
          <img src={pulsLogoImg} alt="Puls" />
        </Link> */}
        {/* <Link href="https://www.kulturrom.no/" title="Kulturrom">
          <img src={kulturromImg} alt="Kulturrom" />
        </Link> */}
      </div>
      <hr style={{ transform: "rotate(-1.5deg)" }} />
      <h2 style={{ color: "var(--primary)" }}>Samarbeidspartnere 2022</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <Link href="https://keychange.eu/" title="Keychange">
          <img src={keychangeImg} alt="Keychange" />
        </Link>
      </div>
      <hr style={{ transform: "rotate(1.5deg)" }} />
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} color="#318bb4" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} color="#f98e11" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} color="#618c06" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} color="#fac301" />
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

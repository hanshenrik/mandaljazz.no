import React from "react";

import { Button, Link } from "../../components";
import styles from "./TicketsInfo.css";

// eslint-disable-next-line
const BuyTicketsButton = () => (
  <div
    style={{
      display: "flex",
      paddingTop: "2rem",
      fontSize: "1.5rem",
    }}
  >
    <Button
      asLink
      large
      linkProps={{
        href: "https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2021",
      }}
    >
      Kjøp billetter på TicketCo
    </Button>
  </div>
);

const TicketsInfo = () => (
  <div id="billetter" className={styles.TicketsInfo}>
    <h1>Billetter</h1>
    <p>
      Mandaljazz tilbyr enkeltbilletter, dagspass og festivalpass til publikum.
    </p>

    <BuyTicketsButton />

    <h3>Festivalpass og dagspass</h3>
    <p>Gir inngang til alle konserter.</p>

    <h3>Enkeltbilletter</h3>
    <p>Gir inngang til den aktuelle konserten.</p>
    <p style={{ marginTop: 0 }}>
      <em>
        Enkeltbilletter til konsertene i{" "}
        <Link href="https://www.buenkulturhus.no/" target="_blank">
          Buen Kulturhus
        </Link>{" "}
        selges via deres nettsider.
      </em>
    </p>

    <h3>Studenter og ungdom under 26 år</h3>
    <p>
      Mandaljazz tilbyr rabatterte billetter til studenter og ungdom under 26
      år. Studenter inkluderer også elever på videregående, ungdoms- og
      barneskoler.
    </p>

    <h3>Barnekonsert</h3>
    <p>
      Barn under 1 år går gratis på årets barnekonsert. Andre barn og voksne må
      kjøpe billett.
    </p>

    <h3>Funksjonshemmede med ledsagerbevis</h3>
    <p>
      Innehavere av ledsagerbevis for funksjonshemmede gis gratis billett til
      sin ledsager.
    </p>

    <h3>Aldersgrenser</h3>
    <p>
      Alle konserter i <strong>Teltet</strong> har 18 års aldersgrense. Barn
      under 18 år har adgang i følge med voksen.
    </p>

    <h3>Annen info</h3>
    <ul>
      <li>
        Ved avlysning av konserter refunderes enkeltbilletter, men ikke dagspass
        og festivalpass
      </li>
      <li>
        Dersom man pga. karantene eller koronarestriksjoner er forhindret fra å
        komme på festivalen, kan man få refundert sin billett. Men prøv helst å
        selge den til noen andre{" "}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </li>
      <li>
        Ved konserter i Elvesalen, Mandal Kino og Biblioteket, er det begrenset
        kapasitet. Innehavere av dags- og festivalpass bes møte tidlig for å
        sikre seg plass.
      </li>
      <li>Det selges ikke billetter i døra</li>
      <li>
        Faste, tilviste plasser: Publikum vil få tildelt en fast sitteplass ved
        ankomst. Man må sitte på plassen under hele konserten, med unntak av
        dopauser. Man oppfordres til å sitte sammen med noen fra sin egen
        husstand dersom de også er på konserten. Publikum bes møte opp tidlig
        for å sikre at det blir tid til kontrollert tilvisning av plasser i god
        tid før konsertstart.
      </li>
      <li>Alle konserter starter presis.</li>
    </ul>

    <BuyTicketsButton />
  </div>
);

export default TicketsInfo;

import React, { useState } from "react";
import ReactMapboxGl, {
  Layer,
  Feature,
  Popup,
  ZoomControl,
  RotationControl,
} from "react-mapbox-gl";

import {
  TravelInfo,
  AccomodationInfo,
  ScrollToTopOnMount,
  Link,
} from "../../components";
import styles from "./PracticalInfoPage.css";
import brostein from "../../assets/images/profile/brostein.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaGFuc2hlbnJpayIsImEiOiJjaXpjdTc5a3AwMDhrMndwZW1ucWdkdXdwIn0.a15J4-cKGPIZClcvh-LeTQ",
});

const buildingsPaint = {
  "fill-extrusion-color": "#fff",
  "fill-extrusion-height": {
    type: "identity",
    property: "height",
  },
  "fill-extrusion-base": {
    type: "identity",
    property: "min_height",
  },
  "fill-extrusion-opacity": 0.6,
};

const venues = [
  {
    id: "teltet",
    name: "Teltet (Kulturfabrikken)",
    coordinates: [7.457609, 58.024953],
  },
  { id: "sjoboden", name: "Sjøboden", coordinates: [7.451948, 58.025868] },
  {
    id: "buen",
    name: "Buen (Elvesalen)",
    coordinates: [7.456102489810863, 58.025413017347816],
  },
  {
    id: "piren-kulturrom",
    name: "Piren Kulturrom",
    coordinates: [7.45642627188327, 58.02126823756139],
  },
  {
    id: "lekebutikken",
    name: "Lekebutikken",
    coordinates: [7.4556629215051355, 58.02751486008526],
  },
  {
    id: "hestetroa",
    name: "Hestetroa",
    coordinates: [7.455256960080562, 58.027854579180655],
  },
  {
    id: "uranienborg-p-hus-inngang",
    name: "Inngang Uranienbord P-hus",
    coordinates: [7.454833859794429, 58.02807705665625],
  },
];

const PracticalInfoPage = () => {
  const [venue, setVenue] = useState();
  const [center, setCenter] = useState([7.45436325431531, 58.02442355659143]);
  const onMarkerClick = (venue) => {
    setCenter(venue.coordinates);
    setVenue(venue);
  };

  const onToggleHover = ({ map, cursor }) => {
    map.getCanvas().style.cursor = cursor;
  };

  return (
    <div className={styles.PracticalInfoPage}>
      <ScrollToTopOnMount />
      <Map
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v11"
        center={center}
        zoom={[14.25]}
        containerStyle={{
          height: "50vh",
          width: "100%",
        }}
        onDrag={() => setVenue()}
      >
        <ZoomControl />
        <RotationControl />
        <Layer
          id="3d-buildings"
          sourceId="composite"
          sourceLayer="building"
          filter={["==", "extrude", "true"]}
          type="fill-extrusion"
          minZoom={14}
          paint={buildingsPaint}
        />
        <Layer
          type="circle"
          id="marker"
          paint={{
            "circle-radius": 8,
            "circle-color": "#c30f5c",
            "circle-opacity": 0.95,
          }}
        >
          {venues.map((venue, i) => (
            <Feature
              key={i}
              id={venue.id}
              coordinates={venue.coordinates}
              onClick={() => onMarkerClick(venue)}
              onMouseEnter={(event) =>
                onToggleHover({ map: event.map, cursor: "pointer" })
              }
              onMouseLeave={(event) =>
                onToggleHover({ map: event.map, cursor: "" })
              }
            />
          ))}
        </Layer>
        {venue && (
          <Popup key={venue.id} coordinates={venue.coordinates}>
            <strong>{venue.name}</strong>
          </Popup>
        )}
      </Map>
      <p>
        <Link href="https://goo.gl/maps/faFwNkmTR28gCYRA6">
          <em>Keiser Nicolaus gate 8–12, 4515 Mandal</em>
        </Link>
      </p>
      <div className={styles.TextWidth}>
        <TravelInfo />
        <img
          src={brostein}
          alt="Brostein"
          style={{
            width: "100%",
            margin: "3rem 0",
            placeSelf: "center",
          }}
        />
        <AccomodationInfo />
        <h1>Universell utforming</h1>
        <p>
          De fleste av konsertene skjer på vårt festivalområdet eller i vårt
          festivaltelt på Kulturfabrikken.
        </p>
        <p>
          Kulturfabrikken har to handicap-toaletter i første etasje. Det er
          montert rampe for å enkelt komme inn i bygget med rullestol. Utendørs
          i bakgården er det grus, så det kan kanskje være litt mer krevende å
          komme til med rullestol enn på asfalt eller andre underlag, men vi har
          alltid frivillige på jobb som kan bistå ved behov slik at
          rullestolbrukere fint skal komme seg inn i teltet eller rundt på
          området.
        </p>
        <p>
          Vi arrangerer også noen konserter i kulturhuset Buen. Her er det heis
          og handicap-toaletter.
        </p>
      </div>
    </div>
  );
};

export default PracticalInfoPage;

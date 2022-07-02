import React, { useState } from "react";
import ReactMapboxGl, {
  Layer,
  Feature,
  Popup,
  ZoomControl,
  RotationControl,
} from "react-mapbox-gl";
import { isMobile } from "react-device-detect";

import venues from "../../data/venues.json";

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

const VenueMap = () => {
  const [venue, setVenue] = useState();
  const [center, setCenter] = useState([7.45436325431531, 58.02442355659143]);
  const zoom = isMobile ? 13.75 : 14.25;

  const onMarkerClick = (venue) => {
    setCenter(venue.coordinates);
    setVenue(venue);
  };

  const onToggleHover = ({ map, cursor }) => {
    map.getCanvas().style.cursor = cursor;
  };
  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v11"
      center={center}
      zoom={[zoom]}
      containerStyle={{
        height: "50vh",
        width: "100%",
      }}
      onDrag={() => setVenue()}
      flyToOptions={{
        curve: 2,
        speed: 0.5,
      }}
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
          <div>
            <h3 style={{ margin: 0 }}>{venue.name}</h3>
          </div>
          {venue.supportText && <div>{venue.supportText}</div>}
        </Popup>
      )}
    </Map>
  );
};

export default VenueMap;

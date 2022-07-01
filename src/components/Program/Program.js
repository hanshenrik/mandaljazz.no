import React from "react";
import capitalize from "lodash/capitalize";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import dayjs from "dayjs";
import { SlideDown } from "react-slidedown";
import { isMobile } from "react-device-detect";
import "react-slidedown/lib/slidedown.css";

import { RoundedButton, HashLink, RouterLink } from "../";
import styles from "./Program.css";
import artists from "../Artists/data.json";

class Program extends React.Component {
  static defaultProps = {
    isAlwaysOpen: false,
  };

  concerts = artists
    .filter((artist) => !artist.hideFromProgram)
    .flatMap(({ concerts, ...artist }) => {
      return concerts.map((concert) => ({ ...concert, artist }));
    });

  state = {
    isOpen: false,
  };

  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen });

  concertsGroupedByDay = () =>
    Object.entries(
      groupBy(sortBy(this.concerts, "startAt"), (concert) =>
        capitalize(dayjs(concert.startAt).format("dddd D. MMMM"))
      )
    );

  renderToggleIsOpenButton = () => (
    <RoundedButton onClick={this.toggleIsOpen} style={{ marginTop: "1rem" }}>
      {this.state.isOpen ? "Lukk program" : "Se program"}
    </RoundedButton>
  );

  renderLinkToProgramPage = () => (
    <RouterLink to="/program" style={{ fontWeight: 600 }}>
      Program
    </RouterLink>
  );

  renderArtistText = ({ artist, concert }) => {
    const { shortExtraConcertName } = concert;
    const { hideFromArtistList, link, name, shortName, id } = artist;
    const artistNameInBold = (
      <strong>{`${shortName || name}${
        shortExtraConcertName ? ` (${shortExtraConcertName.toLowerCase()})` : ""
      }`}</strong>
    );

    if (link) {
      return <RouterLink to={link}>{artistNameInBold}</RouterLink>;
    }

    if (hideFromArtistList) {
      return artistNameInBold;
    }

    return (
      <HashLink
        smooth
        to={{
          pathname: "/",
          hash: `#${id}`,
          state: { activeId: id },
        }}
      >
        {artistNameInBold}
      </HashLink>
    );
  };

  render() {
    const { isAlwaysOpen } = this.props;
    if (!isAlwaysOpen && isMobile) {
      return null;
    }

    return (
      <div className={styles.ProgramWrapper}>
        <SlideDown
          className={styles.Program}
          closed={!isAlwaysOpen && !this.state.isOpen}
          transitionOnAppear={false}
        >
          {this.concertsGroupedByDay().map(([day, concerts]) => (
            <div key={day} className={styles.ProgramDay}>
              <>
                <h2>{day}</h2>
                <ul className={styles.ProgramList}>
                  {concerts.map(({ artist, ...concert }) => (
                    <li
                      key={concert.startAt}
                      className={styles.ProgramListItem}
                    >
                      <span
                        className={styles.ProgramEntry}
                        style={{
                          textDecoration: concert.cancelled
                            ? "line-through"
                            : "",
                        }}
                      >
                        <span className={styles.ConcertInfo}>
                          {dayjs(concert.startAt).format("HH:mm")} @{" "}
                          {concert.shortVenue || concert.venue}
                        </span>
                        <span className={styles.ArtistName}>
                          {this.renderArtistText({
                            artist,
                            concert,
                          })}
                        </span>
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        {concert.cancelled && " Avlyst"}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            </div>
          ))}
          <div />
          <div />
          {/* <em style={{ fontSize: "12px", padding: "1rem", textAlign: "right" }}>
            *TBA = To Be Announced
          </em> */}
        </SlideDown>
        {!isAlwaysOpen && this.renderToggleIsOpenButton()}
      </div>
    );
  }
}

export default Program;

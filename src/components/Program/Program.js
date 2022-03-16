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

  artistsToBeShown = artists.filter((artist) => !artist.hideFromProgram);

  state = {
    isOpen: false,
  };

  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen });

  artistsGroupedByDay = () =>
    Object.entries(
      groupBy(sortBy(this.artistsToBeShown, "concertStartAt"), (artist) =>
        capitalize(dayjs(artist.concertStartAt).format("dddd D. MMMM"))
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

  renderArtistText = (artist) => {
    const { hideFromArtistList, link, name, shortName, id } = artist;
    const artistNameInBold = <strong>{shortName || name}</strong>;

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
          {this.artistsGroupedByDay().map(([day, artists]) => (
            <div key={day} className={styles.ProgramDay}>
              <>
                <h2>{day}</h2>
                <ul className={styles.ProgramList}>
                  {sortBy(artists, "concertStartAt").map((artist) => (
                    <li key={artist.id} className={styles.ProgramListItem}>
                      <span
                        className={styles.ProgramEntry}
                        style={{
                          textDecoration: artist.cancelled
                            ? "line-through"
                            : "",
                        }}
                      >
                        <span className={styles.ConcertInfo}>
                          {dayjs(artist.concertStartAt).format("HH:mm")} @{" "}
                          {artist.venue}
                        </span>
                        <span className={styles.ArtistName}>
                          {this.renderArtistText(artist)}
                        </span>
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        {artist.cancelled && " Avlyst"}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            </div>
          ))}
        </SlideDown>
        {!isAlwaysOpen && this.renderToggleIsOpenButton()}
      </div>
    );
  }
}

export default Program;

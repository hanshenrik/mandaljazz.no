import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { HashLink } from "react-router-hash-link";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCameraRetro,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Artist.css";
import byjubileumImg from "../../assets/images/byjubileum.png";
import sparebankenSorImg from "../../assets/images/sponsors/sparebanken-sor.png";
import linkStyles from "../Links/Link.css";
import { PulsInfoBox, Link, Button } from "../";

const getImageUrl = (imageName) =>
  require(`../../assets/images/artists/${imageName}`);

const getSponsorImageUrl = (imageName) =>
  require(`../../assets/images/sponsors/${imageName}`);

const TicketButton = ({
  concertStartAt,
  isFree,
  isKidsConcert,
  reserveFreeTicket,
  externalTicketUrl,
}) => {
  if (reserveFreeTicket) {
    return (
      <>
        <Button
          asLink
          linkProps={{
            href: "https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2022",
          }}
        >
          Reserver gratis plass
        </Button>
        <em style={{ fontSize: "1rem", margin: "0.5rem 0", display: "block" }}>
          {`Konserten er gratis, men alle publikummere${
            isKidsConcert ? " (både barn og voksne) " : " "
          }må reservere plass. Gjelder også de med festivalpass.`}
        </em>
      </>
    );
  } else if (isFree) {
    return <em style={{ fontSize: "0.9rem" }}>Konserten er gratis!</em>;
  } else {
    return (
      <>
        {externalTicketUrl ? (
          <Button
            asLink
            linkProps={{
              href: externalTicketUrl,
            }}
          >
            Kjøp billett hos Buen
          </Button>
        ) : (
          <Button
            asLink
            linkProps={{
              href:
                "https://mandaljazz.ticketco.events/no/nb/e/mandaljazz-2022",
            }}
          >
            Kjøp billett
          </Button>
        )}
        <em style={{ fontSize: "0.9rem" }}>
          Du trenger ikke kjøpe enkeltbillett dersom du har festivalpass eller
          dagspass til {dayjs(concertStartAt).format("dddd")}.{" "}
          <NavLink className={linkStyles.Link} to="/billetter">
            Mer info om billetter
          </NavLink>
          .
        </em>
      </>
    );
  }
};

class Artist extends React.Component {
  render() {
    const {
      artist,
      className,
      id,
      isActive,
      otherIsActive,
      toggleIsActive,
      ...props
    } = this.props;
    const {
      name,
      imageName,
      imageAttribution,
      paragraphs,
      rightAlignedParagraphs,
      spotifyUri,
      youtubeUrl,
      soundcloudId,
      bands,
      isPulsArtist,
      concertStartAt,
      vimeoId,
      venue,
      venueSupportText,
      link,
      video,
      externalTicketUrl,
      isFree,
      isKidsConcert,
      reserveFreeTicket,
      facebookVideoUrl,
      isByjubileumArtist,
      sponsors,
      linkedConcert,
    } = artist;
    const style = isActive
      ? {}
      : { backgroundImage: `url(${getImageUrl(imageName)})` };
    return (
      <div
        className={classNames(styles.Artist, className, {
          active: isActive,
          inactive: otherIsActive,
        })}
        style={style}
        onClick={() => (link ? {} : toggleIsActive(id))}
        {...props}
      >
        {!isActive && link && (
          <ReactRouterLink
            to={link}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {!isActive && !link && (
          <HashLink
            smooth
            to={`#${id}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {!isActive && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h1 className="with-border-left">{name}</h1>
            {isByjubileumArtist && (
              <img
                src={byjubileumImg}
                alt="Mandal by 100 år"
                style={{
                  alignSelf: "flex-end",
                  margin: "1rem",
                  marginTop: "auto",
                  minWidth: "auto",
                  width: "64px",
                  padding: "0.6rem",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
        )}
        {isActive && (
          <div className={styles.ImageWrapper}>
            {imageAttribution && (
              <div className={styles.ImageAttribution}>
                <FontAwesomeIcon icon={faCameraRetro} /> {imageAttribution}
              </div>
            )}
            <img src={getImageUrl(imageName)} alt={name} id={id} />
          </div>
        )}
        {isActive && (
          <div className={styles.ArtistInfo}>
            <h1 className="with-border-left">{name}</h1>
            <div
              className={styles.ArtistInfoGrid}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "text" }}
            >
              <div>
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                {rightAlignedParagraphs &&
                  rightAlignedParagraphs.map((paragraph, index) => (
                    <p
                      key={`right-aligned-${index}`}
                      style={{ direction: "rtl" }}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
              <div>
                <div className={styles.ConcertInfo}>
                  {concertStartAt && (
                    <>
                      <FontAwesomeIcon icon={faClock} />
                      {capitalize(dayjs(concertStartAt).format("dddd HH:mm"))}
                    </>
                  )}
                  {venue && (
                    <>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <div>
                        <div>{venue}</div>
                        {venueSupportText && (
                          <div style={{ fontSize: "0.9rem" }}>
                            {venueSupportText}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
                {linkedConcert && (
                  <div style={{ paddingTop: "1rem" }}>
                    <span style={{ fontSize: "1rem" }}>
                      PS! Spiller også{" "}
                      <HashLink
                        smooth
                        to={{
                          pathname: "/",
                          hash: `#${linkedConcert.id}`,
                          state: { activeId: `${linkedConcert.id}` },
                        }}
                      >
                        {dayjs(linkedConcert.concertStartAt).format(
                          "dddd kl. HH:mm"
                        )}
                      </HashLink>
                      .
                    </span>
                  </div>
                )}
                {
                  <div style={{ margin: "2rem 0" }}>
                    <TicketButton
                      isFree={isFree}
                      isKidsConcert={isKidsConcert}
                      externalTicketUrl={externalTicketUrl}
                      reserveFreeTicket={reserveFreeTicket}
                      concertStartAt={concertStartAt}
                    />
                  </div>
                }
                {bands && (
                  <div>
                    {Object.keys(bands).map((band) => (
                      <div key={band}>
                        <h4>{band}</h4>
                        <ul>
                          {bands[band].map((musician) => (
                            <li key={musician}>{musician}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {facebookVideoUrl && (
                  <Link href={facebookVideoUrl}>Se video på Facebook</Link>
                )}
                {spotifyUri && (
                  <iframe
                    className="SpotifyPlayer"
                    title="spotify"
                    src={`https://open.spotify.com/embed/${spotifyUri}`}
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                )}
                {soundcloudId && (
                  <iframe
                    title={`${name}-soundcloud-iframe`}
                    style={{
                      width: "100%",
                      height: "320px",
                      minHeight: "200px",
                      maxHeight: "60vh",
                    }}
                    frameBorder="0"
                    scrolling="no"
                    src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/${soundcloudId}&amp;color=%233cb371&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=true&amp;show_teaser=false`}
                  />
                )}
                {isPulsArtist && <PulsInfoBox artistName={name} />}
                {isByjubileumArtist && (
                  <div>
                    <img
                      src={byjubileumImg}
                      alt="Mandal by 100 år"
                      className={styles.ByjubileumImg}
                    />
                    {sponsors &&
                      sponsors.some(
                        ({ name }) => name === "Sparebanken Sør"
                      ) && (
                        <img
                          src={sparebankenSorImg}
                          alt="Sparebanken Sør"
                          className={styles.SpecialSponsorImg}
                        />
                      )}
                  </div>
                )}
                {sponsors && (
                  <div>
                    <h4>Disse spanderer billetten</h4>
                    <ul style={{ paddingLeft: sponsors[0].img ? 0 : "auto" }}>
                      {sponsors.map(({ name, img }) =>
                        img ? (
                          <li key={name} style={{ listStyleType: "none" }}>
                            <img
                              src={getSponsorImageUrl(img)}
                              alt={`Sponset av ${name}`}
                              className={styles.SponsorImg}
                            />
                          </li>
                        ) : (
                          <li key={name}>{name}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {vimeoId && (
              <iframe
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                src={`https://player.vimeo.com/video/${vimeoId}`}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={`${name}-vimeo-iframe`}
              />
            )}
            {youtubeUrl && (
              <iframe
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                src={youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${name}-youtube-iframe`}
              />
            )}
            {video && (
              <video
                controls
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                controlsList="nodownload"
                onClick={(e) => e.stopPropagation()}
              >
                <source
                  src={require(`../../assets/videos/${video}`)}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Artist;

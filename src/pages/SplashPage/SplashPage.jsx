import React from "react";
// import SpotifyPlayer from "react-spotify-player";

import jazzlaug from "../../assets/images/profile/jazzlaug.png";
// import christmasJazzlaug from "../../assets/images/jazzlaug-julehatt.png";
import { 
  // Artists, 
  ScrollToTopOnMount
} from "../../components";
import styles from "./SplashPage.css";

const SplashPage = () => (
  <div className={styles.SplashPage}>
    <ScrollToTopOnMount />
    <header className={styles.Header}>
      <img src={jazzlaug} className={styles.Logo} alt="Jazzlaug" />
      <h1 className={styles.HeaderText}>mandaljazz</h1>
      <p className={styles.SubHeader}>
        Takk for i år{" "}
        <span role="img" aria-label="yellow heart">
          💛
        </span>
        <br />
        Sees i 2023!
      </p>
    </header>
    {/* <Artists /> */}
    {/* <div style={{ margin: "0 auto", maxWidth: "95%", width: "500px" }}>
      <SpotifyPlayer uri="spotify:user:mandaljazz:playlist:7bRe3n4p7ki3482DA7paLg" />
    </div> */}
  </div>
);

export default SplashPage;

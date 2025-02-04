import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Footer,
  NavMenu,
  // Program,
  // BuyTicketButton,
} from "./components";
import {
  AboutPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  SplashPage,
  ProgramPage,
  VolunteerPage,
  TicketsPage,
  JazzlaugsVennerPage,
  SpecificCityAdLandingPage,
  JazzMarketPage,
  SmatassjazzPage,
  // ByjubileumPage,
} from "./pages";
import CoronaPage from "./pages/CoronaPage";
import brostein from "./assets/images/profile/brostein.png";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {!["stavanger", "kristiansand", "gobi"].includes(
                location.pathname.replace(/\//g, "")
              ) && (
                <>
                  <NavMenu />
                  {/* <Program /> */}
                </>
              )}
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/praktisk" component={PracticalInfoPage} />
                <Route exact path="/jazzmarked" component={JazzMarketPage} />
                <Route
                  exact
                  path="/smatassjazz"
                  component={SmatassjazzPage}
                />
                <Route exact path="/frivillig" component={VolunteerPage} />
                <Route
                  exact
                  path="/historikk"
                  component={ProgramHistoryPage}
                />
                <Route exact path="/om" component={AboutPage} />
                <Route exact path="/koronainfo" component={CoronaPage} />
                <Route exact path="/program" component={ProgramPage} />
                {/* <Route exact path="/byjubileum" component={ByjubileumPage} /> */}
                <Route exact path="/billetter" component={TicketsPage} />
                <Route
                  exact
                  path="/utlegg"
                  component={() =>
                    window.location.assign(
                      "https://forms.gle/Twc4cdormafcnPVw8"
                    )
                  }
                />
                <Route
                  exact
                  path="/gobi"
                  component={() => (
                    <iframe
                      src="https://live.gobiapp.com/story/embed/54a4c2829b695d3db0ae4759c8a3d708f1279f60?hideNameAndTimestamp=true"
                      style={{ width: "100%", height: "100vh" }}
                      title="Gobi"
                    />
                  )}
                />
                <Route
                  exact
                  path="/jazzlaugs-venner"
                  component={JazzlaugsVennerPage}
                />
                <Route
                  exact
                  path="/stavanger"
                  component={() => (
                    <SpecificCityAdLandingPage
                      city="Stavanger"
                      distandeFromMandalDescription="etter en 2,5 timers biltur"
                      enturUrl="https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1593079200000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120&amp;startLat=58.969391&amp;startLon=5.735101&amp;startId=NSR%3AGroupOfStopPlaces%3A8&amp;startLabel=Stavanger&amp;startName=Stavanger"
                    />
                  )}
                />
                <Route
                  exact
                  path="/kristiansand"
                  component={() => (
                    <SpecificCityAdLandingPage
                      city="Kristiansand"
                      tagLine="Tjuvstart sommerferien med jazz og streetfood."
                      distanceFromMandalDescription="bare i underkant av en time med 200-bussen og vipps så befinner du deg i nabobyen"
                      enturUrl="https://en-tur.no/travel-result?stopId=NSR%3AGroupOfStopPlaces%3A85&amp;stopName=Mandal&amp;stopLabel=Mandal&amp;stopLat=58.029357&amp;stopLon=7.460864&amp;date=1593079200000&amp;transportModes=bus%2Ctram%2Crail%2Cmetro%2Cwater%2Cflytog%2Cflybuss&amp;fromWidget=true&amp;walkSpeed=1.3&amp;minimumTransferTime=120&amp;startLat=58.145304&amp;startLon=7.988857&amp;startId=NSR%3AGroupOfStopPlaces%3A9&amp;startLabel=Kristiansand&amp;startName=Kristiansand"
                    />
                  )}
                />
                <Route
                  component={() =>
                    window.location.replace(
                      window.location.origin +
                        "/#" +
                        window.location.pathname.replace(/\//g, "")
                    )
                  }
                />
              </Switch>
              <img
                src={brostein}
                alt="Brostein"
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  margin: "3rem 0",
                  placeSelf: "center",
                }}
              />
              {![
                "jazzlaugs-venner",
                "stavanger",
                "kristiansand",
                "gobi",
              ].includes(location.pathname.replace(/\//g, "")) && <Footer />}
              {/* {!["billetter"].includes(
                location.pathname.replace(/\//g, "")
              ) && <BuyTicketButton />} */}
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;

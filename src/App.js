import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { BuyTicketButton, Footer, NavMenu } from "./components";
import {
  AccomodationPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  NotFoundPage,
  SplashPage
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/mandaljazz.no">
        <Route
          render={({ location }) => (
            <ParallaxProvider>
              <BuyTicketButton />
              <NavMenu />
              <div style={{ height: "4.5rem" }} />
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/overnatting" component={AccomodationPage} />
                <Route exact path="/praktisk" component={PracticalInfoPage} />
                <Route exact path="/historikk" component={ProgramHistoryPage} />
                <Route component={NotFoundPage} />
              </Switch>
              <Footer />
            </ParallaxProvider>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;

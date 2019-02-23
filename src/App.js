import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BuyTicketButton, Footer, NavMenu } from "./components";
import {
  AboutPage,
  PracticalInfoPage,
  ProgramHistoryPage,
  NotFoundPage,
  SplashPage,
  VolunteerPage
} from "./pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/mandaljazz.no">
        <Route
          render={({ location }) => (
            <>
              <NavMenu />
              <Switch location={location}>
                <Route exact path="/" component={SplashPage} />
                <Route exact path="/praktisk" component={PracticalInfoPage} />
                <Route exact path="/frivillig" component={VolunteerPage} />
                <Route exact path="/historikk" component={ProgramHistoryPage} />
                <Route exact path="/om" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
              <BuyTicketButton />
              <Footer />
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;

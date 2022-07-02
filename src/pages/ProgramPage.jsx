import React from "react";

import { Program, ScrollToTodayOrTopOnMount } from "../components";

const ProgramPage = () => (
  <div style={{ marginTop: "4rem" }}>
    <ScrollToTodayOrTopOnMount />
    <Program isAlwaysOpen />
  </div>
);

export default ProgramPage;

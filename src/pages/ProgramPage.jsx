import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Program, RoundedButton, ScrollToTopOnMount } from "../components";
import { generateId } from "../utils/stringUtils";

const ProgramPage = () => {
  const todayId = generateId(dayjs().format("dddd D. MMMM"));
  const [todayElement, setTodayElement] = useState();

  useEffect(() => {
    setTodayElement(document.getElementById(todayId));
  }, []);

  const handleScrollToToday = () => {
    if (todayElement) {
      todayElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <ScrollToTopOnMount />
      {isMobile && todayElement && (
        <RoundedButton
          onClick={() => handleScrollToToday()}
          style={{
            width: "fit-content",
            margin: "auto",
          }}
        >
          Dagens program ↓
        </RoundedButton>
      )}
      <Program isAlwaysOpen />
    </div>
  );
};

export default ProgramPage;

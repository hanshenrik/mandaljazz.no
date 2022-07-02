import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { generateId } from "../utils/stringUtils";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

const ScrollToTodayOrTopOnMount = () => {
  const [component, setComponent] = useState(null);
  const todayId = generateId(dayjs().set("month", 6).format("dddd D. MMMM"));

  useEffect(() => {
    const todayElement = document.getElementById(todayId);
    if (todayElement) {
      todayElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setComponent(null);
    } else {
      setComponent(<ScrollToTopOnMount />);
    }
  }, []);
  return component;
};

export default ScrollToTodayOrTopOnMount;

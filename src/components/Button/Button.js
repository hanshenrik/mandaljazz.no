import React from "react";

import styles from "./Button.css";

const getStyling = ({ large, small }) => {
  if (large) {
    return { padding: "1rem 3rem", fontSize: "2rem" };
  }
  if (small) {
    return { padding: "0.25rem 1rem" };
  }
  return {};
};

const Button = ({ children, asLink, linkProps, ...props }) => {
  const button = (
    <div className={styles.Button} style={getStyling(props)} {...props}>
      {children}
    </div>
  );
  return asLink ? (
    <a
      {...linkProps}
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      {button}
    </a>
  ) : (
    button
  );
};

export default Button;

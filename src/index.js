import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/nb";
import smoothscroll from "smoothscroll-polyfill";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

dayjs.locale("nb");

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { I18nextProvider } from "react-i18next";
import i18n from "utils/i18n";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from "react";
import ReactDOMClient from "react-dom/client";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { defaultLocale, dynamicActivate } from "./i18n";

import App from "./App";

const root = ReactDOMClient.createRoot(document.querySelector("#root"));

const I18nApp = () => {
  React.useEffect(() => {
    dynamicActivate(defaultLocale);
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  );
};

root.render(<I18nApp />);

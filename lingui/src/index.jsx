import React from "react";
import ReactDOMClient from "react-dom/client";

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/en/messages'

i18n.load('en', messages)
i18n.activate('en')


import App from "./App";

const root = ReactDOMClient.createRoot(document.querySelector("#root"));

root.render(<I18nProvider i18n={i18n}><App /></I18nProvider> );

import React from "react";

import { Trans } from '@lingui/macro'

import { locales, dynamicActivate } from "./i18n";

const App = () => (
    <div>
        <h1><Trans>Hello World</Trans></h1> 
        <ul>
        {Object.entries(locales).map(
            ([localeKey, localeName]) => {
            return (<li><a key={localeKey} href="#" onClick={() => dynamicActivate(localeKey)}>{localeName}</a></li>)}
        )}
        </ul>
        
    </div>
);

export default App;
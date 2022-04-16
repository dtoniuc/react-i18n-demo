import React from 'react';

import { useTranslation } from 'react-i18next';
import i18n, { locales } from './i18n';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Hello World')}</h1>
      <span>{t('How are you?')}</span>
      <span>{t('key.translation.placeholder')}</span>
      <ul>
        {Object.entries(locales).map(([localeKey, localeName]) => (
          <li key={localeKey}>
            <a href='#' onClick={() => i18n.changeLanguage(localeKey)}>
              {localeName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

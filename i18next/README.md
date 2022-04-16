# React i18next Demo

Demo project to experiment the setup of i18next for a new react project.

For the setup I've followed the official [documentation](https://react.i18next.com) of React-i18next.

# How it works

- Use `useTranslation` hook to wrap texts that need to be translated. (You can also use the withTranslation (HOC) or the Translation Component). See the docs for more details.

- Run `yarn i18:extract` to extract all the translatable strings.

- Fill in the translations in the catalog files `public/{locale}/translation.json`.

- Run dev server or build the app.

- Translations are dinamically loaded on language change.

> **_NOTE:_** I18next supports a lot more configuration options as do the i18next-parser library. This is just a minimal startup project.

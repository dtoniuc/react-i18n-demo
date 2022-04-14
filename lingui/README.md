# React Lingui.js Demo

Demo project to experiment the setup of lingui.js for a new react project.

For the setup I've followed the official [documentation](https://lingui.js.org/index.html) of LinguiJS.

# How it works

- Wrap text from React components with the `<Trans>` macro from `"@lingui/macro"`.

- Run `yarn i18:extract` to extract all the translatable strings

- Fill in the translations in the catalog files `{locale}/messages.json`

- Run `yarn i18n:compile` to compile the translated messages

- Run dev server or build the app

> **_NOTE:_** LinguiJS provides a webpack [loader](https://lingui.js.org/ref/loader.html) to dynamically compile the catalogs on development. However I did not manage to integrate the loader in the short time I've allocated for this project.

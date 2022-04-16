export default {
  locales: ['en', 'fr'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{js,jsx}'],
  sort: true,
  createOldCatalogs: false,
};
